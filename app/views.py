from app import app
from flask import render_template,jsonify,url_for,request
from werkzeug import secure_filename
from checkfiles import *
from edfread import *
@app.route('/', methods=['GET'])
@app.route('/main', methods=['GET', 'POST'])
def main():
	if request.method == 'POST':
		f = request.files['edf_upload']
		f.save("D:\\"+secure_filename(f.filename))
	list=getlist()
	return render_template('main.html',files=list)
@app.route('/getdata',methods=['GET'])
def data():
	filename = request.args.get('filename')
	path = "D:/uploadfiles/"+filename
	list=load_edf(path)
	return jsonify(list)
	#return list