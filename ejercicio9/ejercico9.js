/*
Escribe una función que genere la tabla de multiplicar de un número
específico.
*/

    function generaTabla(numero){
        let tabla = "";
         for (let i=1;i<=10;i++){
            tabla += `${numero} x ${i} = ${numero*i}\n`;
         }
         return tabla;
     } 
      console.log(generaTabla(5));