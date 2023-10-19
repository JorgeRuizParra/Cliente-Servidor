def cabeceraHtml():
    print("""
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cesta de la compra</title>

    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <h1 class="text-center">Cajero</h1>

          """)
    
def finHtml():
    print("""
    </body>
    </html>
      """)
    
def crearCuenta():
    print("""
    <form action="crearCuenta.py" method="get">
        <button type="submit">Crear Cuenta</button><br/>
    </form>
          """)
    
def htmlRecarga():
    print("""
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="1;cajero.py">
    <title>Cesta de la compra</title>
</head>
<body>
    <h1>Cesta de la compra</h1>
</body>
</html>
          """)