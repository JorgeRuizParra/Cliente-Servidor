#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html")

import http.cookies,os
from urllib.parse import urlparse, unquote, parse_qs

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

cookie = http.cookies.SimpleCookie()#crea la cookie

texto = param["texto"][0]#introduce el valor de el input "texto" en una variable texto

textoABC = texto.startswith("ABC")#si texto empieza por ABC devuelve TRUE

if os.environ.get("HTTP_COOKIE") != None:#comprueba si hay cookies
    cookie.load(os.environ.get("HTTP_COOKIE"))#carga las cookies
    if "empiezaABC" in cookie:
        if textoABC:#si textoABC es TRUE realiza el if
            textoJunto = cookie["empiezaABC"].value+ " " +texto
            cookie["empiezaABC"] = textoJunto
            
            print(cookie)
            print()
else:
    cookie = http.cookies.SimpleCookie()
    cookie["empiezaABC"] = texto

    print(cookie)
    print()

print()
