#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

import json

equipos = [
        "Real Madrid",
        "FC Barcelona",
        "Atletico de Madrid",
        "Valencia CF",
        "Sevilla FC"
    ]

    # Crear el diccionario con los nombres de los equipos
equipos_dict = {"equipos": equipos}

    # Convertir el diccionario a formato JSON
equipos_json = json.dumps(equipos_dict, indent=4)

    # Imprimir el JSON de los equipos

print("Content-type: application/json")
print("")
# Llamar a la función para generar el JSON de los equipos
print(equipos_json)

