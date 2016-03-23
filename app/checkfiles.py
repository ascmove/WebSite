import os
import json
list=[]
def getfilename():
    d = "D:\\project\\venv\\uploadfiles"
    I=os.listdir(d)
    for i in I:
#        print i
        list.append(i)   
def getlist():
    if not list:
       getfilename()
    return list
#    a=json.dumps(list,ensure_ascii=True)
#    return a
