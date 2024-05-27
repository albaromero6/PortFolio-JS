/*********************************************************************************/
/*                           JS para Ejercicio3.html                             */
/*                                 Alba Romero                                   */
/*                                  Mayo 2023                                    */
/*                              Lenguaje de Marcas                               */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", calculosTriangulo);

function calculosTriangulo(event) {

    event.preventDefault();

    let lado1 = parseInt(document.getElementById("lado1").value);
    let lado2 = parseInt(document.getElementById("lado2").value);
    let lado3 = parseInt(document.getElementById("lado3").value);

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        
        document.getElementById("resultado").innerHTML = "Los valores introducidos no son válidos"

    } else {

        if (lado1 === lado2 && lado2 === lado3) {

            document.getElementById("resultado").innerHTML = "El triángulo es <strong>equilátero</strong>";

        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {

            document.getElementById("resultado").innerHTML = "El triángulo es <strong>isósceles</strong>";

        } else {

            document.getElementById("resultado").innerHTML = "El triángulo es <strong>escaleno</strong>";

        }
    }
    return false;
}