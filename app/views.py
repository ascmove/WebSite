from app import app
@app.route('/', methods=['GET', 'POST'])
@app.route('/main', methods=['GET'])
def signin_form():
    return render_template('main.html')