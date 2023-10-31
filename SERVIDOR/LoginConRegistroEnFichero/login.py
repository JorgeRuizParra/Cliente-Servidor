#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import os,json,hashlib,http.cookies,uuid

from urllib.parse import urlparse, parse_qs

import codigoHtml

ru= os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

#fichero con usuarios
fichUsu = "datos/usuarios.json"

if "nombre" not in param:
    codigoHtml.error("Falta el nombre")
    exit()
if "pass" not in param:
    codigoHtml.error("Falta la contraseña")
    exit()

nombre = param["nombre"][0]
passwd = param["pass"][0]

pasEnc = (hashlib.sha3_512(str.encode(passwd))).hexdigest()

with open(fichUsu) as fichero:
    try:
        listaUsuarios = json.load(fichero)
    except:
        listaUsuarios = []

usuarioEncontrado = False

for usu in listaUsuarios:
    if usu[0]==nombre and usu[1]==pasEnc:
        usuarioEncontrado=True
        break

if not usuarioEncontrado:
    codigoHtml.error("Usuario No encontrado o password incorrecta")
    exit()

print("Content-type: text/html")
cookie = http.cookies.SimpleCookie()
cookie["ID1"] = uuid.uuid4()

print(cookie)
print()

print('''
      
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset='utf-8'>
            <meta http-equiv="refresh" content="2;pagina1.py">
            <title>Login Con Registro</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <link href='css/bootstrap.min.css' rel="stylesheet">
            <script src='js/bootstrap.bundle.min.js'></script>
        </head>
        <body>
        </body>
    </html>
          ''')
          