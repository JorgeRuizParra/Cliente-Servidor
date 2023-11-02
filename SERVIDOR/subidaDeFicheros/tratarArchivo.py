#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import cgi, os
import cgitb; cgitb.enable()

form = cgi.FieldStorage()

print("Content-type: text/html\n")

fileitem = form['filename']

def crearLista(fn):
     with open(fn, 'r') as file:
        lineas = file.readlines()

        lista = "<ol>\n"

        contenido = lineas[0].split(",")
        lista += f"<li>{contenido[0]}\n"

    
        lista +="<ol>"
        
        for li in contenido[1:]:
            lista +=f"      <li>{li}</li>\n"
    
        lista += "</ol>"
        lista += "</li>"
        lista += "</ol>"

        return lista

if fileitem.filename:
    fn = os.path.basename(fileitem.filename)

    open("img/"+fn, 'wb').write(fileitem.file.read())

    lista_html = crearLista("img/"+fn)

    print(lista_html)

