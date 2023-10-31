#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Context-Type: text/html\n")

import os, json, hashlib

from urllib.parse import urlparse, parse_qs

import codigoHtml

ru= os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

#fichero con usuarios
fichUsu = "datos/usuarios.json"

###
# validar que nos envian los parametros
#   que existen
#   que contienen algo
#   que cumplen los requisitos, p.e.: la pass sea de mas de 4 caracteres

# el objetivo es guardar el nuevo usuario en el fichero de usuarios

# abrir el fichero de usuarios -> JSON
# comprobar que el usuario no existe en la lista de usuarios
# si no existe lo añadimos al fichero y vuelta a la página principal
# si existe ir a la pagina de error

# formato de la estructura
#[["usuario1","1234","usu1@impresa.com"],["usuario2","3456","usu2@mitienda.com"]]
def validarParametros():
    if "nombre" not in param:
        codigoHtml.error("Falta el nombre")
        exit() #sale del python
    if "pass" not in param:
        codigoHtml.error("Falta la contraseña")
    if "email" not in param:
        codigoHtml.error("Falta el email")

    nom = param["nombre"][0]
    pas = param["pass"][0]
    ema = param["email"][0]

    if nom == "":
        codigoHtml.error("El nombre tiene que tener algo")
        exit() #sale del python
    if pas == "" or len(pas)<5:
        codigoHtml.error("Error en la contraseña, minimo 5 caracteres")
        exit()
    if ema == "" or ema.count("@")!=1:
        codigoHtml.error("El email tiene que tener algo o tiene que tener formato de email")
        exit()

    pasEnc = (hashlib.sha3_512(str.encode(pas))).hexdigest()

    return [nom,pasEnc,ema]

def comprobarFichero():
    try:
        #abrir el fichero en modo lectura
        fich = open(fichUsu, "a")
    except:
        #se crea el fichero en datos si da el erro al abrir
        fich = open(fichUsu, "x")
    
    if os.path.getsize(fichUsu) == 0:
        fich.write("[]")
    #cerrar el fichero
    fich.close()

# se validan los parametros y se guarda como lista en usuario
usuario = validarParametros()

#comprobar que el fichero existe, si no crearlo con una lista vacia
comprobarFichero()

with open(fichUsu) as fichero:
    try:
        listaUsuarios = json.load(fichero)
    except:
        listaUsuarios = []

usuarioNoEncontrado = True

for usu in listaUsuarios:
    if usu[0]==usuario[0] or usu[2]==usuario[2]:
        usuarioNoEncontrado=False

if(usuarioNoEncontrado):
    listaUsuarios.append(usuario)
else:
    codigoHtml.error("Usuario o Email repetido")
    exit()

with open(fichUsu, "wt") as fichero:
    json.dump(listaUsuarios, fichero)



codigoHtml.correcto()