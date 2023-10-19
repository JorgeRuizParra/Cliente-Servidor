#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/plain\n")

import os

from urllib.parse import urlparse, parse_qs

ru= os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

fig = int(param["figura"][0])
nFil = int(param["nFilas"][0])

### dibuja un cuadrado de asteriscos de n filas y n columnas
def cuadrado(n):

    linea = ""

    print(f"Dibujar un cuadrado de {nFil} filas y {nFil} columnas")

    for f in range(n):  # bucle para crear las filas
        for c in range(n):  #bucle para crear las columnas
            linea += "*"    #acumulando asteriscos
        print(linea)
        linea=""

def triangulo(n):
    print(f"Dibujar un triángulo de {n} filas")

    linea = ""

    for f in range(n): # con n es 5 -> 0 1 2 3 4
        for c in range(n-f): # con 5-0 -> 0 1 2 3 4, con 5-1 ->0 1 2 3, 5-2 -> 0 1 2 
            linea += "*"
        print(linea)
        linea=""

def trianguloVuelta(n):
    print(f"Dibujar un triángulo dado la vuelta de {n} filas")

    linea = ""

    for f in range(n):
        for c in range(f+1):
            linea += "*"
        print(linea)
        linea=""

def trianguloReves(n): 

    print(f"Dibujar un triángulo al revés de {n} filas")

    linea = ""

    for f in range(n):
        for e in range(n-f-1):
            linea += " "
        for c in range(f+1):
            linea += "*"
        print(linea)
        linea = ""

def trianguloRevesInvertido(n):
    print(f"Dibujar un triángulo al revés invertido de {n} filas")

    linea = ""

    for f in range(n,0,-1):
        for e in range(n-f):
            linea += " "
        for c in range(f):
            linea += "*"
        print(linea)
        linea = ""

def cuadradoMultiStr(n):
    print(f"Dibujar un cudrado de {n} filas y {n} columnas")
    
    linea = ""

    for f in range(n):
        linea = "*" * n
        print(linea)
        linea=""

def trianguloMultiStr(n):
    linea = ""

    for f in range(n):
        linea= "*" * (f+1)
        print(linea)
        linea=""

def trianguloVueltaMultiStr(n):
    linea = ""

    for f in range()


match fig:
    case 1:
        cuadrado(nFil)
    case 2:
        triangulo(nFil)
    case 3:
        trianguloVuelta(nFil)
    case 4:
        trianguloReves(nFil)
    case 5:
        trianguloRevesInvertido(nFil)
    case 6:
        cuadradoMultiStr(nFil)
    case 7:
        trianguloMultiStr(nFil)
    case 8:
        trianguloVueltaMultiStr(nFil)
    case _:
        print("opción no contemplada")