#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

numeros=[1,2,3,7]
operacion="suma"

def operacionesLista():
    if numeros == []:
        print("No hay numeros en la lista")
    else:
        if operacion == "suma":
            resultado = 0
            for n in numeros:
                resultado = resultado + n
        if operacion == "producto":
            resultado = 1
            for n in numeros:
                resultado = resultado * n

    print("El resultado de la operacion es "+str(resultado))

operacionesLista()

