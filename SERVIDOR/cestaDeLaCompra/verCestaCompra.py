#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import http.cookies, os
import funcionesHtml

numTeclados = 0
numMonitores = 0
numRatones = 0

print("Content-Type: text/html\n")
cookie = http.cookies.SimpleCookie()

if os.environ.get("HTTP_COOKIE") != None:
    cookie.load(os.environ.get("HTTP_COOKIE"))
    if "teclados" in cookie:
        numTeclados = cookie["teclados"].value
    if "monitores" in cookie:
        numTeclados = cookie["monitores"].value
    if "raton" in cookie:
        numTeclados = cookie["raton"].value

funcionesHtml.cabeceraHtml()

print("<p>numero de teclados:"+numTeclados+"<br/>numero de monitores:"+numMonitores+"<br/>numero de ratones:"+numRatones+"</p>")

funcionesHtml.finHtml()