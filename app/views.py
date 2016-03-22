@app.route('/', methods=['GET', 'POST'])
def home():
    
@app.route('/main', methods=['GET'])
def signin_form():
    return render_template('main.html')