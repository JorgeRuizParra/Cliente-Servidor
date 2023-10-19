#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import http.cookies, os

#Comprobar si el cliente nos envía la cookie CONTADOR
#si es true -> incrementamos el valor que trae la cookie CONTADOR
#si es false -> CONTADOR = 1, es la cookie que tengo que devolver

print("Content-Type: text/html")
cookie = http.cookies.SimpleCookie()
cookie["CONTADOR"] = 1
cookie["CONTADOR"]["expires"] = "Wed, 11 Oct 2022 07:28:00 GMT"
print(cookie["CONTADOR"])
print()


print("""
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contador de visitas</title>
        </head>
        <body>
            <h1>Cookies</h1>
    """)

print("<h3>Cookie Borrada</h3>")

print('<a href="visitas.py">Visitas</a>')

print("""
    </body>
    </html>
      """)