import re, datetime, operator
import numpy as np
import json
EVENT_SIGNAL = 'EDF Annotations'
GLOBAL_LABEL = ['EEG Fp1-F7', 'EEG F7-T3', 'EEG T3-T5', 'EEG T5-O1', 'EEG Fp2-F8', 'EEG F8-T4', 'EEG T4-T6', 'EEG T6-O2', 'EEG Fp1-F3', 'EEG F3-C3', 'EEG C3-P3', 'EEG P3-O1', 'EEG Fp2-F4', 'EEG F4-C4', 'EEG C4-P4', 'EEG P4-O2', 'EEG Fz-Cz', 'EEG Cz-Pz', 'ECG EKG', 'EDF Annotations']
SEGMENT = 'sgement'
def edf_header(f):
	h = {}
	assert f.tell() == 0  # check file position
	assert f.read(8) == '0       '
	h['local_patient'] = f.read(80).strip()
	h['local_recording'] = f.read(80).strip()
	(day, month, year) = f.read(8).strip().split('.',2)
	(hour, minute, second) = f.read(8).strip().split('.',2)
	int_year = int(year)
	int_month = int(month)
	int_day = int(day)
	int_hour = int(hour)
	int_minute = int(minute)
	int_second = int(second)
	h['data_time'] = (datetime.datetime(int_year+2000, int_month, int_day, int_hour, int_minute, int_second))
	head_num_bytes = int(f.read(8))
	head_reserved = f.read(44)
	h['record_num'] = int(f.read(8))
	h['duration'] = int (f.read(8))
	num_signals = h['num_signal'] = int(f.read(4))
	signals = range(h['num_signal'])
	h['label'] = [f.read(16).strip() for n in signals]
	h['transducer_type'] = [f.read(80).strip() for n in signals]
	h['phys_dimension'] = [f.read(8).strip() for n in signals]
	h['physical_min'] = np.asarray([float(f.read(8)) for n in signals])
	h['physical_max'] = np.asarray([float(f.read(8)) for n in signals])
	h['digital_min'] = np.asarray([float(f.read(8)) for n in signals])
	h['digital_max'] = np.asarray([float(f.read(8)) for n in signals])
	h['prefiltering'] = [f.read(80).strip() for n in signals]
	h['n_samples_per_record'] = [int(f.read(8)) for n in signals]
	f.read(32*num_signals)
	return h
    
class EDFReader:
	def __init__(self,file):
		self.file = file

	def read_header(self):
		self.header = edf_h = edf_header(self.file)
		self.record_num = edf_h['record_num']
		self.label = edf_h['label']
		self.dig_min = edf_h['digital_min']
		self.phys_min = edf_h['physical_min']
		phys_range = edf_h['physical_max'] - edf_h['physical_min']
		dig_range = edf_h['digital_max'] - edf_h['digital_min']
		self.gain = phys_range / dig_range

	def read_data_record(self):
		result = [ ]
		signal = [ ]
		temp_postdata = {}
		self.nr = {}
		dig_min, phys_min, gain = self.dig_min, self.phys_min, self.gain
		label = self.label
		for i, nsamp in enumerate(self.header['n_samples_per_record']):
			self.nr[GLOBAL_LABEL[i]] = nsamp
			samples = self.file.read(nsamp*2*self.record_num)
			if len(samples) != nsamp*2*self.record_num:
				print r'End Of EDF/EDF+ Data'
				break
			result.append(samples)
		for (i, samples) in enumerate(result):
			note = [ ]
			dig = np.fromstring(samples,'<i2').astype(np.float32)
			for n in range(len(dig)):
				phys_value = (dig[n] - dig_min[i] )*gain[i] + phys_min[i]
				note.append(phys_value )
			signal.append(note)
		for n_signal in range(self.header['num_signal']):
			temp_postdata[GLOBAL_LABEL[n_signal]] = signal[n_signal]
		return temp_postdata
	def result_segment(self, segresult):
		postdata = []
		for nr in range(self.record_num):
			temp = {}
			for key in segresult.keys():
				front = nr*self.nr[key]
				tail = (nr+1)*self.nr[key]
				temp[key] = segresult[key][front:tail]
			postdata.append(temp)
		return postdata
def load_edf(edffile):
	f = open(edffile,'rb')
	reader = EDFReader(f)
	reader.read_header()
	return  reader.result_segment(reader.read_data_record())