/*********************************************************************************/
/*                           JS para Ejercicio9.html                             */
/*                                 Alba Romero                                   */
/*                                  Mayo 2023                                    */
/*                              Lenguaje de Marcas                               */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", mostrarMes);

function mostrarMes(event) {

    event.preventDefault();

    const meses = [ "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre",
                    "cctubre", "noviembre", "diciembre" ];

    let valor = document.getElementById("mes").value;
    let nombreMes = meses[valor];

    document.getElementById("resultado").innerHTML = "El mes seleccionado es <strong>" + nombreMes + "</strong>";

    return false;

}