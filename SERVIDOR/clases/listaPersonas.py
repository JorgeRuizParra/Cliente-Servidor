#!C:\Users\zx20student122\AppData\Local\Programs\Python\Python311\python.exe

from persona import Persona
from alumno import Alumno
from profesor import Profesor

per1 = Persona("Juan","Rodriguez Garcia",33)

print("Content-type: text/plain\n")

print(per1)

per2 = Persona("Ana","Lopez Garcia",43)

per2.viva = False

if (per2.viva):
    print(per2.nombreCompleto())
else:
    print(per2.nombreCompleto() + " Ha muerto")

alu1 = Alumno("Jose", "García García", 18, "DAW")

print(alu1)

print(alu1.nomCiclo)

prof1 = Profesor("AAAA", "BBBB CCCC", 50)

prof1.addAsignatura("Servidor")
prof1.addAsignatura("Cliente")

print(prof1)

for asig in prof1.listaAsignaturas():
    print(asig)