#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Context-Type: text/html\n")

import os,json
from urllib.parse import urlparse, unquote, parse_qs

import codigoHtml

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

numCuenta = int(param["nc"][0]) -1
cant = int(param["c"][0])
oper = param["operacion"][0]

fich = open("datos/Cuentas.json")
listaCuentas = json.load(fich)
fich.close()

if oper == "Ingresar":
    listaCuentas[numCuenta][1] += cant
    listaCuentas[numCuenta][2].append(cant)
    fich = open("datos/Cuentas.json","wt")
    fich.write(json.dumps(listaCuentas))
    fich.close()
    codigoHtml.operacion()
else:
    if listaCuentas[numCuenta][1] >= cant:
        listaCuentas[numCuenta][1] -= cant
        listaCuentas[numCuenta][2].append(-cant)
        fich = open("datos/Cuentas.json","wt")
        fich.write(json.dumps(listaCuentas))
        fich.close()
        codigoHtml.operacion()
    else:
        codigoHtml.error()

