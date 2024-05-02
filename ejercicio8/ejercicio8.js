/*
Desarrolla una función que calcule el monto de impuestos a pagar según un
porcentaje dado. Puedes usar funciones autoejecutables.
*/

function calcularImpuesto(monto, porcentaje){
    let impuesto = (monto * porcentaje) / 100;
    return impuesto;
}

// Ejemplo de uso:
let salarioBruto = 5000;
let porcentajeImpuesto = 23; // es decir, 23% del salario se convertirá en impuesto

let impuestoPagar = calcularImpuesto(salarioBruto, porcentajeImpuesto);
console.log("El monto de impuestos a pagar es de " + impuestoPagar);

