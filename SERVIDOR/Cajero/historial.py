#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Context-Type: text/html\n")

import codigoHtml,os,json
from urllib.parse import urlparse, unquote, parse_qs

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

numCuenta = int(param["numeroCuenta"][0])
saldo = int(param["saldo"][0])

codigoHtml.cabeceraHtml()

fich = open("datos/Cuentas.json")
listaCuentas = json.load(fich)
fich.close()

print("<p class='text-light'>Numero de Cuenta: <b>"+str(numCuenta)+"</b></p>")
print("<p class='text-light'>Saldo: <b>"+str(saldo)+"</b></p>")
print('<p class="text-center">Historial<p>')

for x in listaCuentas:
    if x[0] == int(numCuenta):
        transacciones = x[2]
        break
 
for operacion in transacciones:
    print("<div class='bg-dark'>")
    if operacion > 0:
        print("<li style='color:green;'>Ingreso: "+str(operacion)+"</li>")
    else:
        print("<li style='color:red;'>Retirada: "+str(operacion)+"</li>")
    print("</div>")
print("<br /><br />")
print("<button><a href='cajero.py'>Atras</a></button>")
    
codigoHtml.finHtml()
