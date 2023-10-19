#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import os
from urllib.parse import urlparse, unquote, parse_qs

import math

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

peso = float(param["peso"][0])
altura = float(param["alt"][0])

IMC = peso/(altura*altura)

print("""
<html>
<head>
<title>Hipotenusa</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body> 
<h1>Resultado</h1>
<h4>
""")

print(round(IMC,2))

print("""
</h4>
</body>
</html> 
""")