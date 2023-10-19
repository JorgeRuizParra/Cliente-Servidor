#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Context-Type: text/html\n")

import codigoHtml,os,json

fich = None

try: 
    #abrir el fichero en modo lectura
    fich = open("datos/listaCompra.dat")
except:
    #se crea el fichero datos si da error al abrir
    fich = open("datos/listaCompra.dat", "x")

#leemos el contenido del fichero en una lista de productos
if os.path.getsize("datos/listaCompra.dat") != 0:
    productos = json.load(fich)
else:
    productos = []


#cerrar el fichero
fich.close()

#funcion que crea una lista ordenada con los productos
def listaDeProductos():
    if len(productos) != 0:#si hay productos se crea la lista
        print("<ol>")
        for p in productos:
            print(f"<li>{p[1]} de {p[0]}</li>")
        print("</ol>")
    else: #si la lista no tiene productos
        print("<h3>Lista de la compra vacía</h3>")
    print("<hr />")

codigoHtml.cabeceraHtml()

listaDeProductos()

codigoHtml.formulario()


codigoHtml.finHtml()