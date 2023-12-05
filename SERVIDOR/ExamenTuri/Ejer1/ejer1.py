#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import codigoHTMl

#crear codigo HTML: tiene que presentar 20 imagenes de coches, del coche1.png al coche20.png
#dentro de div va un img. div con id "contenedorN" y img con alt -> "imagen de coche N"


#crear codigo HTML: tiene que representar descripciones de producto en un array
#cada producto en un div co id "productoN y dentro del div p con la descripcion del producto"

print("Content-type: text/html\n")

codigoHTMl.cabHTMLGen()

for i in range(1,21):
    print(f"""
        <div id="contenedor{i}">
        <img src="imagenes/coche{i}.png alt="imagen de coche {i}">
        </div>
        """)
    
descripciones_producto = [
    "Descripcion del producto 1: Esta es la descripcion del primer producto",
    "Descripcion del producto 2: Esta es la descripcion del segundo producto",
    "Descripcion del producto 3: Esta es la descripcion del tercero",
    "Descripcion del producto 4: Esta es la descripcion del cuarto producto",
    "Descripcion del producto 5: Esta es la descripcion del quinto"
]

cont = 1
for desc in descripciones_producto:
    descProd = desc.split(":")[1].strip() 
    #separo el cotenido del array por los dos puntos, y lo de la segunda posicion (descripciones)
    #lo guardo en la variable para luego imprimirlo en parrafos
    #el strip es para que no me pite el espacio que hay delante de cada descripcion
    print(f"""<div id="producto{cont}><p>{descProd}</p>""")
    cont+=1 #incremento el contador

codigoHTMl.finHTMLGen()