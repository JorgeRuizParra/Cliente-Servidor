#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Context-Type: text/html\n")

import codigoHtml,os,json

cuenta = ""
fich = None

try: 
    #abrir el fichero en modo lectura
    fich = open("datos/Cuentas.json")
except:
    #se crea el fichero datos si da error al abrir
    fich = open("datos/Cuentas.json", "x")

#leemos el contenido del fichero en una lista de productos
if os.path.getsize("datos/Cuentas.json") != 0:
    cuentas = json.load(fich)
else:
    cuentas = []


#cerrar el fichero
fich.close()

#funcion que crea una lista ordenada con los productos
def listaCuentas():
    if len(cuentas) != 0:#si hay productos se crea la lista
        print("<ol>")
        for p in cuentas:
            print(f"<li>Numero de cuenta:{p[0]}, Saldo:{p[1]}</li>")
        print("</ol>")
    else: #si la lista no tiene productos
        print("<h3>No hay cuentas</h3>")
    print("<hr />")

codigoHtml.cabeceraHtml()

listaCuentas()

codigoHtml.crearCuenta()

codigoHtml.finHtml()
