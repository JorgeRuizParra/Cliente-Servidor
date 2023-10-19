#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import os
from urllib.parse import urlparse, unquote, parse_qs

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

n1 = int(param["num1"][0])
n2 = int(param["num2"][0])
oper = param["operacion"][0]

salida = "El resultado de la {} de {} {} {} es {}"

print("""
<html>
<head>
<title>CR7</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body> 
<h3>Resultado
""")


if oper == "s":
    print(salida.format("suma",n1,"de",n2,n1+n2))

if oper == "r":
    print(salida.format("resta",n1,"de",n2,n1-n2))

if oper == "m":
    print(salida.format("multiplicación",n1,"por",n2,n1*n2))

if oper == "d":
    print(salida.format("división",n1,"entre",n2,int(n1/n2)))

print("""
</h3>
</body>
</html> 
""")