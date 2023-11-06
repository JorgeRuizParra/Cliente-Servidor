import os,sys

from urllib.parse import urlparse, unquote, parse_qs

def crearFiltros():
    ru = os.environ.get("REQUEST_URI")
    parametros = urlparse(ru)
    param = parse_qs(parametros[4])

    filtro = ""

    if "empresa" in param and param["empresa"][0] != "":
        empresa = param["empresa"][0]
        filtro += "empresa ='" + empresa+"' "
        
    if "tematica" in param and param["tematica"][0] != "":
        if filtro != "":
            filtro += " AND "
        tematica = param["tematica"][0]
        filtro += "tematica ='" + tematica+"' "

    if "numero_de_jugadores" in param and param["numero_de_jugadores"][0] != "":
        if filtro != "":
            filtro += " AND "
        numero_de_jugadores = param["numero_de_jugadores"][0]
        filtro += "numero_de_jugadores =" + numero_de_jugadores+" "

    if "anioInicial" in param and param["anioInicial"][0] != "":
        if filtro != "":
            filtro += " AND "
        anioInicial = param["anioInicial"][0]
        filtro += "publicacion >=" + anioInicial+" "

    if "anioFinal" in param and param["anioFinal"][0] != "":
        if filtro != "":
            filtro += " AND "
        anioFinal = param["anioFinal"][0]
        filtro += "publicacion <=" + anioFinal+" "

    

    if filtro != "":
        filtro= " WHERE "+ filtro

    return filtro
