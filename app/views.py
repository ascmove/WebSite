from app import app
from flask import render_template,jsonify,url_for,request,session,redirect
from werkzeug import secure_filename
from checkfiles import *
from edfread import *
import psycopg2
import re
import random
PAGE = 0
@app.route('/', methods=['GET'])
def index():
	return redirect(url_for('login'))
@app.route('/login',methods=['GET','POST'])
def login():
	if request.method == 'POST':
		username = request.form["username"]
		password = request.form["password"]
		conn = psycopg2.connect(database = "mydatabase",user = "postgres",password = "luxiaoli",host = "localhost",port ="5432")
		cur = conn.cursor()
		string = "SELECT username, password FROM stu WHERE username='"+username+"';"
		cur.execute(string)
		results = cur.fetchall()
		session['username'] = request.form['username']
		if 'remember_me' in request.form:
			session['remember_me'] = request.form['remember_me']
		else:
			session['remember_me'] = None
		if(results):
			if(password == results[0][1]):
				#session['uid']=random.randint(1,7895481)
				return redirect(url_for('main'))
			else:
				return render_template('login.html',wrong=1)
	if 'username' in session and 'remember_me' in session:
		if session['remember_me'] == 'remember_me':
			return render_template('login.html',username = session['username'])
	return render_template('login.html')
@app.route('/register',methods=['GET','POST'])
def register():
	if request.method == 'POST':
		username = request.form["username"]
		password = request.form["password"]
		hospital = request.form["hospital"]
		conn = psycopg2.connect(database = "mydatabase",user = "postgres",password = "luxiaoli",host = "localhost",port ="5432")
		cur = conn.cursor()
		string  = "INSERT INTO stu(username,password,hospital) VALUES ('"+username+"','"+password+"','"+hospital+"');"
		cur.execute(string)
		conn.commit()
		cur.close()
		conn.close()
		return redirect(url_for('login'))
	return render_template('register.html')
@app.route('/main', methods=['GET', 'POST'])
def main():
	#uid=random.randint(1,7895481)
	#session['uid']=uid
	list=getlist()
	global PAGE
	if PAGE>0:
		return render_template('main.html',files=list,pageAccount=PAGE)
	if request.method == 'POST':
		#if request.form["uid"] == str(session['uid']):
		f = request.files['edf_upload']
		if not re.match('fde.',f.filename[::-1]):
			return render_template('main.html',files=list,filefalse=1)
		f.save("D:\\"+secure_filename(f.filename))
			#uid = random.randint(1,7895481)
	return render_template('main.html',files=list)
@app.route('/getdata',methods=['GET'])
def data():
	if(request.args.get('filename')!='null'):
		session['filename']=request.args.get('filename')
	filename = session['filename']
	path = "D:/uploadfiles/"+filename
	list=load_edf(path)
	page=request.args.get("page")
	return jsonify(list[int(page)-1])
	#return jsonify(list[2])
	#return list
@app.route('/showPage')
def showPage():
	global PAGE
	PAGE=9
	return redirect(url_for('main'))