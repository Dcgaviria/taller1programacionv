/*Implementa una función que calcule el factorial de un número
dado. Puedes usar cualquier tipo de función. */
function factorial(num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(5));