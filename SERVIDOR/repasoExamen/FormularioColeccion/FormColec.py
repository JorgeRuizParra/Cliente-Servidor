#!C:\Users\jorge\AppData\Local\Programs\Python\Python312\python.exe

print("Content-type: text/html\n")

import os
from urllib.parse import urlparse, unquote, parse_qs

usuario = [["Jorge","Ruiz"],["Ruben","Rovira"]]

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])
    
nombre = param["nombre"][0]
ctr = param["ctr"][0]



def correcto():
    print('''
    <!DOCTYPE html>
          <html>
          <head>
            <title>Ejer1</title>
          </head>
          <body>
            <h1>Bienvenido '''+nombre+'''</h1>
          </body>
          </html>
    ''')

def error():
    print("Incorrecto")

usuarioEncontrado = False

for usu in usuario: 
    if usu[0]==nombre and usu[1]==ctr:
        usuarioEncontrado = True

if usuarioEncontrado:
    correcto()
else:
    error()










