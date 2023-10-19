#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Content-Type: text/plain\n")

import os

dir = "datos/"
nombreFich = "palabras.dat"

'''
fich = open(dir+nombreFich)

#contenido = fich.readline()

#for contenido in fich:
#    print(contenido)

#while contenido:
#    print("-"+contenido)
#    contenido = fich.readline()
#else:
#    print("Fin de fichero")

listaDias = [dia.strip('\n') for dia in fich.readlines()]

print(listaDias)

if 'Lunes\n' in listaDias:
    print("Esta el lunes")

#for linea in fich
#   print(linea)

fich.close()
'''
'''
try:
    fich = open(dir+nombreFich,'at')
    fich.write("\ny vuelta a empezar")
    fich.close()
except:
    print("problema al abrir el fichero")
'''

#para saber el directorio actual de trabajo
print(os.getcwd())

#para saber si el path es un directorio
print(os.path.isdir(dir))

#para saber si un path es un fichero
print(os.path.isfile(dir+nombreFich))

#para cambiar de directorio de trabajo
os.chdir(dir)
print(os.getcwd())

#se pueden abrir los ficheros que hay en el directorio de trabajo sin indicar el path
f = open(nombreFich)
print(f.readlines())
f.close()