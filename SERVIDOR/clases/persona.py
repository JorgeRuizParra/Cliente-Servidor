class Persona:
    def __init__(self,nom,apell,ed):
        self.nombre = nom
        self.apellidos = apell
        self.edad = ed
        self.viva = True
    
    def nombreCompleto(self):
        return self.nombre + " " + self.apellidos
    
    def __str__(self):
        return self.nombre + " " + self.apellidos + "," + str(self.edad)