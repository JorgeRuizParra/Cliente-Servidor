#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import http.cookies,os


cookie = http.cookies.SimpleCookie()
cookie["ID1"] = 1
cookie["ID1"] = "Wed, 11 Oct 2022 07:28:00 GMT"

print("Content-type: text")

print('''Context-Type: text/html\n
    
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>Login Con Registro</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <meta http-equiv="refresh" content="2;index.html">
        <link href='css/bootstrap.min.css' rel="stylesheet">
        <script src='js/bootstrap.bundle.min.js'></script>
    </head>
    <body>
        <h1>Saliendo de la aplicacion</h1>
    </body>
    </html>
    ''')