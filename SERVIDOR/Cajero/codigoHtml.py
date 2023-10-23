def cabeceraHtml():
    print("""
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cajero</title>

    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
          <div class="row mt-3">
          <div class="col"></div>
          <div class="col bg-primary">
    <h1 class="text-center">Cajero</h1>

          """)
    
def finHtml():
    print("""
          </div>
    <div class="col"></div>
    </div>
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
    <title>Crear Cuenta</title>
</head>
<body>
    <h1>Creando Cuenta ...</h1>
</body>
</html>
          """)
    
def operar():
    print("""
    <form action='operar.py' method="get">  
        <label for='nc'>Num Cuenta</label><input type='number' name='nc' id='nc' value="1"><br />
        <label for='c'>Cantidad</label><input type='number' name='c' id='c'><br />
        <select id="operacion" name="operacion">
          <option value="Ingresar">Ingresar</option>
          <option value="Retirar">Retirar</option>
        </select>
          <button type="submit">Operar</button>
    </form>
    """)

def error():
    print("""
        <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="1;cajero.py">
    <title>Error</title>
</head>
<body>
    <h1>Error</h1>
</body>
</html>
          """)
    
def operacion():
    print("""
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="1;cajero.py">
    <title>Operando</title>
</head>
<body>
    <h1>Operando</h1>
</body>
</html>
          """)
