from app import app
from flask import render_template,jsonify
from checkfiles import *
from edfread import *
@app.route('/', methods=['GET', 'POST'])
@app.route('/main', methods=['GET'])
def signin_form():
    list=getlist()
    return render_template('main.html',files=list)
@app.route('/getdata',methods=['GET'])
def data():
	list=load_edf("D:/uploadfiles/nicolet.edf")
	return jsonify({'data':list})
	#return list