#!C:\Users\jorge\AppData\Local\Programs\Python\Python312\python.exe

import http.cookies, os

print("Content-Type: text/html")
cookie = http.cookies.SimpleCookie()

if os.environ.get("HTTP_COOKIE") == None:
    cookie["manzana"] = 1
    print(cookie)
    print()
else:
    cookie.load(os.environ.get("HTTP_COOKIE"))
    if "manzana" in cookie:
        cookie["manzana"] = int(cookie["manzana"].value) + 1
        print(cookie["manzana"])
        print()
    else:
        cookie["manzana"] = 1
        print(cookie["manzana"])
        print()

print('''
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <meta http-equiv="refresh" content="2;index.html">
</head>
<body>
    <h1>Manzana añadida</h1>
</body>
</html>
    ''')