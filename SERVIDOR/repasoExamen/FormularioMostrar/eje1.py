#!C:\Users\jorge\AppData\Local\Programs\Python\Python312\python.exe

print("Content-type: text/html\n")

import os
from urllib.parse import urlparse, unquote, parse_qs

usuario = ["Jorge","Ruben"]
contrasena = ["Ruiz","Rovira"]

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])
    
nombre = param["nombre"][0]
ctr = param["ctr"][0]

def html():
    print('''
    <!DOCTYPE html>
          <html>
          <head>
            <title>Ejer1</title>
          </head>
          <body>
            <h1>Hola '''+nombre+'''</h1>
          </body>
          </html>
    ''')

html()
    
