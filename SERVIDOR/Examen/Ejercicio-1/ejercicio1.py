#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

n = 1

def cabecera():
    print('''
        <!DOCTYPE html>
        <html>
        <head>
        <title>Ejercicio 1</title>
        </head>
        <body>

        ''')
    
def fin():
    print('''
        </body>
        </html>
        ''')
    
cabecera()
while n < 21:
    print('''<div id="contenedor'''+str(n)+'''">
                <img src="imagenes/coche'''+str(n)+'''.png" alt="imagen de coche '''+str(n)+'''"></img>
            </div>
          ''')
    n += 1
fin()
