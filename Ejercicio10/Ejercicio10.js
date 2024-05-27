/*********************************************************************************/
/*                         n JS para Ejercicio10.html                            */
/*                                 Alba Romero                                   */
/*                                  Mayo 2023                                    */
/*                              Lenguaje de Marcas                               */
/*********************************************************************************/

const traduccionesMeses = {
    "enero": "january",
    "febrero": "february",
    "marzo": "march",
    "abril": "april",
    "mayo": "may",
    "junio": "june",
    "julio": "july",
    "agosto": "august",
    "septiembre": "september",
    "octubre": "october",
    "noviembre": "november",
    "diciembre": "december"
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();

        const selectMes = document.getElementById('mes');
        const mesSeleccionado = selectMes.value;

        if (mesSeleccionado in traduccionesMeses) {
            const mesTraducido = traduccionesMeses[mesSeleccionado];
            document.getElementById('resultado').innerHTML = `
                <p class="text-center">La traducción de ${mesSeleccionado} es <strong> ${mesTraducido}<strong></p>
            `;
        }
    });
});
