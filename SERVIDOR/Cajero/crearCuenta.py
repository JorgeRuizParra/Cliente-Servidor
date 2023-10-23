#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Context-Type: text/html\n")

import os, json, random

from urllib.parse import urlparse, parse_qs

import codigoHtml

ru= os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

numero_de_cuenta = random.randint(100000, 999999)
cuenta = [numero_de_cuenta,0,[]]

if os.path.getsize("datos/Cuentas.json") == 0:
    listaCuentas = [cuenta]
    listaJson = json.dumps(listaCuentas)
else:
    fich = open("datos/Cuentas.json")
    listaCuentas = json.load(fich)
    fich.close()
    listaCuentas.append(cuenta)
    listaJson = json.dumps(listaCuentas)
fich = open("datos/Cuentas.json", "wt")
fich.write(listaJson)

fich.close()

codigoHtml.htmlRecarga()