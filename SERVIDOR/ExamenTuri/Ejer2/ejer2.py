#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

#hacer una funcion: tiene que evaluar una condición sobre los datos recibidos
#y devolver un resultado

#si es una función tiene PARAMETROS y si devuelve algo es con RETURN

#funcion que recibe una lista (lista es array) de numeros y un texto con la operación (suma o producto)

#función que recibe una lista de letras -> lista es array

print("Content-type:text/plain\n")

def operacionesLista(numeros,operacion):
    if len(numeros) == 0:
        return 0
    if operacion != "suma" and operacion != "producto":
        return -1
    
    if operacion == "suma":
        resp = 0
        for s in numeros:
            resp= resp + s
    else:
        resp = 1
        for s in numeros:
            resp= resp* s

    return resp

print(operacionesLista([1,2,3,4],"suma")) #devolver 10
print(operacionesLista([1,2,3,4],"producto")) #devolver 24
print(operacionesLista([1,2,3,4],"resta")) #devolver -1
print(operacionesLista([],"suma")) #devolver 0
print(operacionesLista([],"producto")) #devolver 0

def concatenaVocales(letras):
    if len(letras) > 5:
        return "error"
    resp = ""
    for v in letras:
        if not v in ["O", "E", "A", "I", "U"]:
            return "error"
        resp+= v
    return resp
    
print(concatenaVocales([])) #devuelve ""
print(concatenaVocales(["A"])) #devuelve "A"
print(concatenaVocales(["A","A","A"])) #devuelve "AAA"
print(concatenaVocales(["O", "E", "A"])) #devuelve "OEA"
print(concatenaVocales(["A", "A", "I", "A", "A", "I"])) #devuelve "error" porque hay seis letras
print(concatenaVocales(["O", "1", "A"])) #devuelve "error" porque hay un numero
print(concatenaVocales(["a", "U", "A"])) #devuelve "error" porque hay una vocal que no es mayuscula