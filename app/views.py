from app import app
from flask import render_template
@app.route('/', methods=['GET', 'POST'])
@app.route('/main', methods=['GET'])
def signin_form():
    return render_template('main.html')