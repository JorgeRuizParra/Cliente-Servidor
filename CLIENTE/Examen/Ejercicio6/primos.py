#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import cgi, json
form = cgi.FieldStorage()
n = int(form['num'].value)
primos = [2, 3, 5, 7, 11, 13, 15, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
resultado = n in primos #true si n esta en primos, false si no lo esta
print("Content-Type: text/plain\n")
print(json.dumps(resultado))