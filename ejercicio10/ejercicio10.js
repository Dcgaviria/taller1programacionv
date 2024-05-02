/*
Crea una función que valide si una contraseña cumple con ciertos criterios
(longitud, caracteres especiales, etc.). Puedes utilizar métodos de
funciones.
*/

    function validatePassword(password) {
        // longitud mínima: 8
        if (password.length < 8) return false;
        
        // al menos un número
        let hasNumber = /\d/.test(password);
        if (!hasNumber) return false;
        
        // al menos una minúscula y una mayúscula
        let lowerCase = /[a-z]/.test(password);
        let upperCase = /[A-Z]/.test(password);
        if (!lowerCase || !upperCase) return false;
        
        // al menos uno o más símbolos especiales
        let specialCharacters = /\W/;
        let hasSpecialCharacter = specialCharacters.test(password);
        if (!hasSpecialCharacter) return false;
        
        return true;
    }
    
// Pruebas
console.log(validatePassword("MiCuenta123!"));       // false
console.log(validatePassword("MiCuent@1234567       890"));   // false
console.log(validatePassword("MiCuent@123$%^&*()_-+=[]{}|?/><,.:;\"'~`!@#$%^&*()_+{}\"<>?,./:;\"][];:'~`-=\\|/"));   // true
console.log(validatePassword("MiCuenta123$%^&*()_-+=[]{}\|,.<>?/`~"));      // true 
