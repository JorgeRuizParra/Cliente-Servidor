def error(texto):
    print('''Context-Type: text/html\n
    
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset='utf-8'>
            <title>Login Con Registro</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <link href='css/bootstrap.min.css' rel="stylesheet">
            <script src='js/bootstrap.bundle.min.js'></script>
        </head>
        <body>
            <h1>Error</h1>
          ''')
    print(texto)
    print('''
        </body>
        </html>
        ''')
    
def correcto():
    print('''Context-Type: text/html\n
          
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset='utf-8'>
            <title>Login Con Registro</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <link href='css/bootstrap.min.css' rel="stylesheet">
            <script src='js/bootstrap.bundle.min.js'></script>
        </hea
          d>
        <body>
            <h1>Correcto</h1>
        </body>
    </html>
          ''')
    
def aplicacion(texto, enlace):
    print('''Content-type: text/html\n
          
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset='utf-8'>
            <title>Login Con Registro</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <link href='css/bootstrap.min.css' rel="stylesheet">
            <script src='js/bootstrap.bundle.min.js'></script>
        </head>
        <body>
            <h1>Aceros de hispania</h1>
            <h3>'''+texto+'''</h3>
            <a href="'''+enlace+'''">enlace a la otra pagina</a>
            <a href="logout.py">Logout</a>
        </body>
        </html>
        ''')