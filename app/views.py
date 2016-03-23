from app import app
from flask import render_template
from checkfiles import *
@app.route('/', methods=['GET', 'POST'])
@app.route('/main', methods=['GET'])
def signin_form():
    list=getlist()
    return render_template('main.html',files=list)