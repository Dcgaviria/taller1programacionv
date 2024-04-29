/*Desarrolla una función que cuente la cantidad de palabras en
una cadena dada. Puedes usar funciones anónimas. */
const contarPalabras = (cadena) => {
    let palabras = cadena.split(" ");
    return palabras.length;
}
console.log(contarPalabras("Hola mundo"));