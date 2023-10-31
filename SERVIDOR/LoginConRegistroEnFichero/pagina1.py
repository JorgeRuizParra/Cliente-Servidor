#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import http.cookies,os

import codigoHtml

if os.environ.get("HTTP_COOKIE") == None:
    codigoHtml.error("No estas logeado en el sistema")
    exit()


cookie = http.cookies.SimpleCookie()
cookie.load(os.environ.get("HTTP_COOKIE"))

if "ID1" in cookie:
    codigoHtml.aplicacion("pagina 1", "pagina2.py")
else:
    codigoHtml.error("No estas logeado en el sistema")
