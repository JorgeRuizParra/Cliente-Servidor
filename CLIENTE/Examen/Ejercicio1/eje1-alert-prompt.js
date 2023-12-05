//leer los cuatro numeros
let n1 = Number(prompt("Numero 1"));
let n2 = Number(prompt("Numero 2"));
let n3 = Number(prompt("Numero 3"));
let n4 = Number(prompt("Numero 4"));

//comprobar que los numeros son enteros
if (Number.isInteger(n1) == true && Number.isInteger(n2) == true && Number.isInteger(n3) == true && Number.isInteger(n4) == true){
    x = (n1 + n2 + n3 + n4)/4;//realizar la media
    parseInt(x);//convertir la media en un entero
    alert("La media es "+x)
}else{
    alert("Error: Por favor ingrese un numero entero");
}