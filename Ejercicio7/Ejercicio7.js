/*********************************************************************************/
/*                           JS para Ejercicio7.html                             */
/*                                 Alba Romero                                   */
/*                                  Mayo 2023                                    */
/*                              Lenguaje de Marcas                               */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", diviEuclides);

function diviEuclides(event) {

    event.preventDefault();

    let divi = parseInt(document.getElementById("dividendo").value);
    let disor = parseInt(document.getElementById("divisor").value);
    let cociente = 0; 
    let resto;

    if (isNaN(divi) || isNaN(disor)) {
        
        document.getElementById("resultado").innerHTML = "Introduzca números enteros";

    } else {

        while (divi >= disor) {
            divi -= disor;
            cociente++;
        }
    
        resto = divi;
    
        document.getElementById("resultado").innerHTML = "El cociente es " + cociente + " y el resto es " + resto;
        
    }

    return false;

}