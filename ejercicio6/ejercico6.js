/*
Crea una función que filtre los números pares de un array. Puedes utilizar
funciones de expresión.
*/

    const esPar = n => n % 2 === 0;
    const filtrarPares = arr => arr.filter(esPar);
    
    console.log(filtrarPares([1, 2,  3, 4, 5, 6, 7, 8])); 