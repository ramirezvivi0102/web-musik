
// js  boton contacto
function abrir(){
    $('#ventana').modal('show');
  }

  //js tabla index.

  function traerDatos() {
    $.ajax({
        url: "datos.json",
        dataType: "json"
    }).done(function (resultado) {
        var canciones = resultado.canciones;

        canciones = canciones.sort(function (a, b) {
            return b.reproducciones - a.reproducciones;
        });

        var htmlTablaDinamica = '';

        for (var i = 0; i < 3; i++) {
            htmlTablaDinamica += `
                <tr>
                    <td id='color22'>${canciones[i].nombre}</td>
                    <td><audio src='${canciones[i].ruta}' controls='controls' type='audio/mpeg' preload='preload'></audio></td>
                </tr>`;
        }

        document.getElementById("contenido").innerHTML = htmlTablaDinamica;
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error en la carga de datos:", errorThrown);
    });
}

$(document).ready(function () {
    traerDatos();
});
