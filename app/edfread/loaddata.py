from flask import Flask
from edfread import *
app = Flask(__name__)
@app.route('/data')  
def data():
     list=load_edf("nicolet.edf")
 #   data=main("D:\\project\\venv\\uploadfiles\\%s"%(list[0]))
     return list
if __name__ == '__main__':
    app.run(debug=True)