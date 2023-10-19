#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Content-Type: text/html\n")

import os
from urllib.parse import urlparse, unquote, parse_qs

print("""
<!DOCTYPE html>
<html>
<head>
<title>Tratar formulario</title>
</head>
<body>
<h1>Tratar formulario</h1>
""")

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

print(param['nombre'][0])
print("<br />")
print(param['edad'][0])

print("""
</body>
</html>
""")