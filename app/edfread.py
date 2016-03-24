import re, datetime, operator
import numpy as np
import json
EVENT_SIGNAL = 'EDF Annotations'

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
        self.dig_min = edf_h['digital_min']
        self.phys_min = edf_h['physical_min']
        phys_range = edf_h['physical_max'] - edf_h['physical_min']
        dig_range = edf_h['digital_max'] - edf_h['digital_min']
        self.gain = phys_range / dig_range

    def read_data_record(self):
        result = [ ]
       # signal = [ ]
        dig_min, phys_min, gain = self.dig_min, self.phys_min, self.gain
        nsamp = self.header['n_samples_per_record'][0]
        samples = self.file.read(nsamp*2)
        note = []
        dig = np.fromstring(samples,'<i2').astype(np.float32)
        for n in range(len(dig)):
            phys_value = (dig[n] - dig_min[0] )*gain[0] + phys_min[0]
            note.append(phys_value)
        #a=json.dumps(note)
        return note
def load_edf(edffile):
    f = open(edffile,'rb')
    reader = EDFReader(f)
    reader.read_header()
    return  reader.read_data_record()