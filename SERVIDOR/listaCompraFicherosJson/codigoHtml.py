def cabeceraHtml():
    print("""
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cesta de la compra</title>
</head>
<body>
    <h1>Cesta de la compra</h1>

          """)
    
def finHtml():
    print("""
    </body>
    </html>
      """)
    
def formulario():
    print("""
    <form action="productoNuevo.py" method="get">
        <label for="nombre">Nombre del producto:</label>
        <input type="text" name="producto"/><br />
        <label for="cantidad">Cantidad de producto:</label>
        <input type="text" name="cantidad"/><br /> 
        <button>Enviar</button>
    </form>
          """)
    
def htmlRecarga():
    print("""
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="5;listaCompraJson.py">
    <title>Cesta de la compra</title>
</head>
<body>
    <h1>Cesta de la compra</h1>
</body>
</html>
          """)