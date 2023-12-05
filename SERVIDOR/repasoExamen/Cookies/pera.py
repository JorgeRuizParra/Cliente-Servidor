#!C:\Users\jorge\AppData\Local\Programs\Python\Python312\python.exe

import http.cookies, os

print("Content-Type: text/html")
cookie = http.cookies.SimpleCookie()

if os.environ.get("HTTP_COOKIE") == None:
    cookie["pera"] = 1
    print(cookie)
    print()
else:
    cookie.load(os.environ.get("HTTP_COOKIE"))
    if "pera" in cookie:
        cookie["pera"] = int(cookie["pera"].value) + 1
        print(cookie["pera"])
        print()
    else:
        cookie["pera"] = 1
        print(cookie["pera"])
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
    <h1>Pera añadida</h1>
</body>
</html>
    ''')