
console.log('correcto');

var contenido = document.querySelector('#contenido');

function traer() {
    fetch('datos.json')
        .then(res => res.json())
        .then(datos => {
            tabla(datos);
        });
}

function tabla(datos) {
    contenido.innerHTML = '';

    for (let valor of datos) {
        contenido.innerHTML +=
            `<tr>
                <td>${valor.nombre}</td>
                <td>${valor.audio}</td>
            </tr>`;
    }
}
