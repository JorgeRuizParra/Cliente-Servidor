#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import os, sys

from urllib.parse import urlparse, unquote, parse_qs

from BDvideojuegos import BDVideoJuegos
import HtmlVideoJuegos

print("Content-type: text/html\n")

ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

bd = BDVideoJuegos()

if "nombre" in param and param["nombre"][0]!=""\
    and "empresa" in param and param["empresa"][0]!=""\
    and "tematica" in param and param["tematica"][0]!=""\
    and "nJug" in param and param["nJug"][0]!=""\
    and "anio" in param and param["anio"][0]!="":
    #capturar loa datos a insertar
    nombre = param["nombre"][0]
    empresa = param["empresa"][0]
    tematica = param["tematica"][0]
    nJug = param["nJug"][0]
    anio = param["anio"][0]

    bd.insertar(nombre,empresa,tematica,nJug,anio)

    HtmlVideoJuegos.error("Dato Insertados")
else:
    HtmlVideoJuegos.error("algun parametro no es correcto")

bd.cerrarBD()