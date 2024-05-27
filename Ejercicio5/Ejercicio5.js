/*********************************************************************************/
/*                           JS para Ejercicio5.html                             */
/*                                 Alba Romero                                   */
/*                                  Mayo 2023                                    */
/*                              Lenguaje de Marcas                               */
/*********************************************************************************/

document.getElementById("enviarForm").addEventListener("click", cadena);

function cadena(event) {
    event.preventDefault();

    let texto = document.getElementById("cadena").value;

    if (texto.trim() === "") {
        document.getElementById("resultado").innerHTML = "Debes introducir una cadena de caracteres";
    } else if (!isNaN(parseFloat(texto))) {
        document.getElementById("resultado").innerHTML = "Debes introducir una cadena de caracteres válida";
    } else {
        if (texto === texto.toUpperCase()) {
            document.getElementById("resultado").innerHTML = "La cadena está en <strong>mayúsculas</strong>";
        } else if (texto === texto.toLowerCase()) {
            document.getElementById("resultado").innerHTML = "La cadena está en <strong>minúsculas</strong>";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena contiene <strong>mayúsculas</strong> y <strong>minúsculas</strong>";
        }
    }
    return false;
}
