#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import http.cookies, os

valorCookie = ""

print("Content-Type: text/html\n")
cookie = http.cookies.SimpleCookie()


def cabeceraHtml():
    print("""
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Valores</title>
        </head>
        <body>
            <h1>Valores Cookie EmpiezaABC</h1>
          """)

def finHtml():
    print("""
    </body>
    </html>
      """)
    
if os.environ.get("HTTP_COOKIE") != None:
    cookie.load(os.environ.get("HTTP_COOKIE"))
    if "empiezaABC" in cookie:
        valorCookie = cookie["empiezaABC"].value

cabeceraHtml()

print("<p>"+valorCookie+"</p>")

finHtml()


