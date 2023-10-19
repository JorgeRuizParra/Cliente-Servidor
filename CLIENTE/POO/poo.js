const persona = {
	nombre: "Federico",
	apellidos: "Garcia Lorca",
	edad:55,
	nacionalidad:"española",
	datosCompletos: function () {
		alert(this.nombre + " - "+ this.apellidos + " - "+ this.edad);
	}
}

//alert(persona.nombre);

persona.apodo = "El Fede";

//alert(persona.apodo);

//persona.datosCompletos();


for (let variable in persona) {
  console.log(persona[variable]);
}

console.log("-------------")

delete persona.apodo;

for (let variable in persona) {
  console.log(persona[variable]);
}


const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for ( modelo of myObj.cars[0].models){
	console.log(modelo);
}

function verElemento(elem) {
	elem.style.display= "none";
	console.log(elem);
}

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let myString = JSON.stringify(person);
document.getElementById("parrafo").innerHTML = myString;