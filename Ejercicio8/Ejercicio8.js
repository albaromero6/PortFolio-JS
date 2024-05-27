/*********************************************************************************/
/*                           JS para Ejercicio8.html                             */
/*                                 Alba Romero                                   */
/*                                  Mayo 2023                                    */
/*                              Lenguaje de Marcas                               */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", calcularMcd);

function calcularMcd(event) {

    event.preventDefault();
    
    let dividendo = parseInt(document.getElementById("dividendo").value);
    let divisor = parseInt(document.getElementById("divisor").value);
    let temp;
    let mcd;

    if (isNaN(dividendo) || isNaN(divisor)) {

        document.getElementById("resultado").innerHTML = "Introduzca números enteros";

    } else {

        while (divisor !== 0) {
            temp = divisor;
            divisor = dividendo % divisor;
            dividendo = temp;
        }

        mcd = Math.abs(dividendo); 

        document.getElementById("resultado").innerHTML = "El MCD es " + mcd;
    }

    return false;

}