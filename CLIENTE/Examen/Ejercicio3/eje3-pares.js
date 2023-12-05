//El ejercicio le pasa un array con cuatro numeros a la funcion en la cual se comprueba mediante recorriendo el array y diviendo el numero debe devolver true o false true si es par y false si es impar

let resultado = sonPares([2, 4, 6 ,8]);
console.log(resultado)

function sonPares(numeros){
    for (n of numeros){
        par = n%2;
        if (par = 0){
            return true
        }else{
            return false
        }
    }
}