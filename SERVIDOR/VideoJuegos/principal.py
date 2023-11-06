#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

from BDvideojuegos import BDVideoJuegos
import HtmlVideoJuegos
import FormVideojuegos

print("Content-type: text/html\n")

bd = BDVideoJuegos()

HtmlVideoJuegos.salidaPrincipal(bd.todosLosVideojuegos())

bd = BDVideoJuegos()