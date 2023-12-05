#!C:\Users\jorge\AppData\Local\Programs\Python\Python312\python.exe

from BDpublicaciones import BDPublicaciones
import codigoHtml

print("Content-type: text/html\n")

bd = BDPublicaciones()

codigoHtml.salidaPrincipal(bd.todasLasPublicaciones())

bd.cerrarBD()