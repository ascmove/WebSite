import json
jsonstr=[]
str={}
def main(str1):
    info=open(str1,'r')
#    list=['starttime of recording(dd.mm.yy):','starttime of recording(hh.mm.ss):','number of bytes in header record:']
#    list2=['number of data records:','duration of a data record inseconds:']
    info.read(256)    
#    print "ns*label:",
    for i in range(20):
        str['tongdao']=info.read(16)
#    jsonstr.sort()
    jsonstr.append(str)
    a=json.dumps(jsonstr,ensure_ascii=True)
    return a

