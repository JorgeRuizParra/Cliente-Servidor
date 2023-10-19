#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import os
from urllib.parse import urlparse, unquote, parse_qs

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

dato = param["dato"][0]

equiposFutbolBuenos = "Sporting Madrid Barsa Atletico Betis Sevilla"

if dato not in equiposFutbolBuenos:
    print("El equipo " + dato + " no es bueno<br>")
    print("El equipo {} no es bueno<br>".format(dato))
    print(f"El equipo {dato} no es bueno<br>")
else:
    print(f"El equipo {dato} es bueno<br>")

print(equiposFutbolBuenos[9:15]+"<br />")
print(equiposFutbolBuenos[:15]+"<br />")
print(equiposFutbolBuenos[9:]+"<br />")
print(equiposFutbolBuenos[-5:-3]+"<br />")

print(equiposFutbolBuenos[10]+"<br />")
print(equiposFutbolBuenos[-10]+"<br />")


print(equiposFutbolBuenos.upper()+"<br />")
print(equiposFutbolBuenos.lower()+"<br />")

print(equiposFutbolBuenos.strip()+"<br />")

print(equiposFutbolBuenos.replace("a","1")+"<br />")
print(equiposFutbolBuenos.replace("ti","00")+"<br />")

listaEquipos = equiposFutbolBuenos.split(" ")
print(listaEquipos[1]+"<br />")

print(dato.isdecimal())
print(dato.isdigit())

x = 2

print(dato + str(x))

print("En un lugar de \"La\" Mancha")
print("\x12")

print(str(10 > 9)+ "<br />")

print(bool("Hello"))
print(bool(12))

print(bool(""))
print(bool(0))