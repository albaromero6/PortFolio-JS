/*********************************************************************************/
/*                           JS para Ejercicio4.html                             */
/*                                 Alba Romero                                   */
/*                                  Mayo 2023                                    */
/*                              Lenguaje de Marcas                               */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", calculoLetra);

function calculoLetra(event) {

    event.preventDefault();

    const LETRA = "TRWAGMYFPDXBNJZSQVHLCKE";
    const dniRegex = /^[0-9]{8}$/;

    let dni = parseInt(document.getElementById("dni").value);

    if (!dniRegex.test(dni)) {
        
        document.getElementById("resultado").innerHTML = "<br>El formato de DNI introducido no es válido";
        
    } else {

        let resto = dni % 23;

        document.getElementById("resultado").innerHTML = "La letra es: <strong>" + LETRA[resto] + "</strong>";

    }
    return false;
}