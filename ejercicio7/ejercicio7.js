/*
Implementa una función que verifique si una palabra es un palíndromo (se
lee igual de izquierda a derecha que de derecha a izquierda).
*/

function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    
    if (reversedWord === word) return true;
    else return false; 
}

console.log(isPalindrome("radar")); 
console.log(isPalindrome("hello")); 