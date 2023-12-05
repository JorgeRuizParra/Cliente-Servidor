#!C:\Users\jorge\AppData\Local\Programs\Python\Python312\python.exe

import http.cookies, os

print("Content-Type: text/html")
cookie = http.cookies.SimpleCookie()

peras = 0
manzanas = 0
if os.environ.get("HTTP_COOKIE") != None:
    cookie.load(os.environ.get("HTTP_COOKIE"))
    if "pera" in cookie:
        peras = cookie["pera"].value
    if "manzana" in cookie:
        manzanas = cookie["manzana"].value

print('''
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <meta http-equiv="refresh" content="5;index.html">
</head>
<body>
    <h1>Peras:'''+peras+'''</h1>
    <h1>Manzanas:'''+manzanas+'''</h1>
</body>
</html>
    ''')