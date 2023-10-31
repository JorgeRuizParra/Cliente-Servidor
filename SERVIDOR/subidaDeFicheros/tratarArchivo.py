#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import cgi, os
import cgitb; cgitb.enable()

form = cgi.FieldStorage()

print("Content-type: text/html\n")

fileitem = form['filename']



def crearTabla(fn):
    with open(fn, 'r') as file:
        lineas = file.readlines()

        tabla = "<table border='1' style='border: 1px solid black; border-collapse:collapse;'"

        header = lineas[0].strip().split(";")
        tabla += " <tr>\n"
        for col in header:
            tabla += f"<th>{col}</th>"
        tabla += " </tr>\n"

        for linea in lineas[1:]:
            datos = linea.split(";")
            tabla += " <tr>\n"
            for col in datos:
                tabla += f"<td>{col}</td>"
            tabla += " </tr>\n"
        
        tabla += "</table>"

        return tabla
        
if fileitem.filename:
    fn = os.path.basename(fileitem.filename)

    open("img/"+fn, 'wb').write(fileitem.file.read())

    tabla_html = crearTabla("img/"+fn)

    print(tabla_html)

