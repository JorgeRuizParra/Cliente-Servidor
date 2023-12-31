#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import os
from urllib.parse import urlparse, unquote, parse_qs

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

texto= param["texto"][0]
palabra = param["palabra"][0]
letra = param["letra"][0]
#la variable texto contiene el texto introducido
#por el usuario en el formulario

#funciones de apoyo
def inicioHTML():
    print("""
    <!DOCTYPE html>
    <html>  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Calculadora</title>

        <!-- Latest compiled and minified CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
        <!-- Latest compiled JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>

    </head>
    <body>
        <div class="row mt-3">

            <div class="col"></div>

            <div class="col bg-dark text-light text-center">      
                <h1 class="display-1">Resultado</h1>
                <h6 class="display-6">
          """)
    
def finHTML():
    print("""
        </h6>
            </div>

            <div class="col"></div>

        </div>      
    </body>
    </html>
          """)
    
def separaLetrasLineas(t):
    for l in t:
        print(l+"<br/>")

def contarLetras(t):
    contador = 0
    for l in t:
        if (l >= "A" and l <= "Z") or (l >= "a" and l <= "z"):
            contador += 1
        if l >= "ñ" and l <= "á":
            contador += 1
    print(contador)

def reverseTexto(t):
    tam = len(t) #calculo el tamaño de t
    salida = "" #varible con el texto revertido
    for pos in range(tam): #bucle con range -> da la secuencia 0,1..,tam-1
        salida += t[tam-pos-1] #se recorre la palabra en ela secuencia tam-1,tam-2,..1,0 y se añade a la salida
    print(salida) #se imprime la salida

    print(t[::-1])

def encontrarPalabra(t, p):
    encontrada = False
    if t.find(p) != -1:
        encontrada = True
    return encontrada

def contarLetra(t,l): #devuelve el numero de veces que aparece letra l en texto t, si hay un error devuelve -1
    contador = 0
    if len(l) == 1:
        for letra in t:
            if (l == letra):
                contador = contador + 1
    else:
        contador -1
    return contador

def contarVocales(t):
    a = 0
    e = 0
    i = 0
    o = 0
    u = 0

    for l in t:
    #    if l == "A" or l == "a":
    #        a = a + 1
    #    elif l == "E" or l == "e":
    #        e = e + 1
    #    elif l == "I" or l == "i":
    #        i = i + 1
    #    elif l == "O" or l == "o":
    #        o = o + 1
    #    elif l == "U" or l == "u":
    #        u = u + 1

        match l.lower():
            case "a":
                a = a + 1
            case "e":
                e = e + 1
            case "i":
                i = i + 1
            case "o":
                o = o + 1
            case "u":
                u = u + 1
    print(f"Hay {a} as, hay {e} es, hay {i} is, hay {o} os y hay {u} us")

def dividirPalabras(t):
    return t.split(" ")

#
# la salida que se envía al cliente
#
inicioHTML()
separaLetrasLineas(texto)
print("<hr/>")
contarLetras(texto)
print("<hr/>")
reverseTexto(texto)
print("<hr/>")
if encontrarPalabra(texto, palabra):
    print("palabra encontrada")
else:
    print("palabra no encontrada")
print("<hr/>")
print(contarLetra(texto,letra))
print("<hr/>")
contarVocales(texto)
print("<hr/>")
dividirPalabras(texto)
finHTML()