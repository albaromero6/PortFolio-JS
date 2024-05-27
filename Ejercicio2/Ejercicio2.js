/*********************************************************************************/
/*                           JS para Ejercicio2.html                             */
/*                                 Alba Romero                                   */
/*                                  Mayo 2023                                    */
/*                              Lenguaje de Marcas                               */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", calculosRadio);

function calculosRadio(event) {

    event.preventDefault();

    let radio = parseInt(document.getElementById("radio").value);

    if (isNaN(radio)) {

        document.getElementById("resultado").innerHTML = "El valor introducido no es válido"

    } else {

        let longitudCircunferencia = 2 * Math.PI * radio;
        let areaCirculo = Math.PI * Math.pow(radio, 2);
        let volumenEsfera = (4 / 3) * Math.PI * Math.pow(radio, 3);

        document.getElementById("resultado").innerHTML = "La <strong>longitud de la circunferencia</strong> es " + longitudCircunferencia.toFixed(2) + "<br>El <strong>área del círculo</strong> es "
        + areaCirculo.toFixed(2) + "<br>El <strong>volumen de la esfera</strong> es " 
        + volumenEsfera.toFixed(2);

    }

    return false;

}
