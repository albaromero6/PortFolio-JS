/*********************************************************************************/
/*                           JS para Ejercicio1.html                             */
/*                                 Alba Romero                                   */
/*                                  Mayo 2023                                    */
/*                              Lenguaje de Marcas                               */
/*********************************************************************************/

function mostrarMensaje() {

    console.log("Hola mundo");
    document.getElementById("mensaje").innerHTML = "Hola mundo";
}

document.getElementById("bton").onclick = mostrarMensaje;
