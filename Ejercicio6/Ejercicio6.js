/*********************************************************************************/
/*                           JS para Ejercicio6.html                             */
/*                                 Alba Romero                                   */
/*                                  Mayo 2023                                    */
/*                              Lenguaje de Marcas                               */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", palindromo);

function palindromo(event) {

    event.preventDefault();

    
    let palabra = document.getElementById("palabra").value;
    palabra = palabra.toLowerCase();

    let inverso = palabra.split('').reverse().join('');

    if (!isNaN(parseFloat(palabra))) {

        document.getElementById("resultado").innerHTML = "El dato introducido debe ser una cadena de caracteres";

    } else {

        if (palabra === inverso) {
            document.getElementById("resultado").innerHTML = "Es un <strong>palíndromo<strong>";
    
        } else {
            
            inverso = palabra + inverso ;
            document.getElementById("resultado").innerHTML = "No es un <strong>palíndromo</strong><br>" + "Su palíndromo correspondiente es " + inverso;
    
        }
        
    }

    return false;

}