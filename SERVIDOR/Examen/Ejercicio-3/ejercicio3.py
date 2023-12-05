#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

preciosProductosID = {"CA131":99.2, "CB231":55.7, "CA332":101.0, "CD563":65.2, "CB838":48.1}

def cabecera():
    print('''
        <!DOCTYPE html>
        <html>
        <head>
        <title>Ejercicio 3</title>
        </head>
        <body>

        ''')
    
def fin():
    print('''
        </body>
        </html>
        ''')
    
def listaDeProductos():
    resul = 0
    if len(preciosProductosID) != 0:#si hay productos se crea la lista
        print("<table border='1'>")
        print("<th>Identificador</th><th>Precio</th>")
        for p in preciosProductosID.items():#recorre cada items de preciosProductosID y lo guarda en p
            print(f"<tr><td>{str(p[0])}</td><td>{str(p[1])}</td></tr>")
        for n in preciosProductosID.items():#recorre cada items de preciosProductosID y lo guarda en n
            resul += n[1]#suma por cada item el valor de la segunda posicion del diccionario
        print("<tr><td>Total:</td><td>"+str(resul)+"</td></tr>")
        print("</table>")
    else: #si la lista no tiene productos
        print("<h3>Lista Productos vacia</h3>")

cabecera()

listaDeProductos()

fin()