function filtrarDatos(){
    //Carga los datos que estan en el JSON (info.json) usando AJAX
    $.ajax({
		url: "datos.json"
	  }).done(function (resultado) {

		//Guarda el resultado en variables
		//resultado = JSON.parse(resultado);
		canciones= resultado.canciones;

		// Obtengo lo que el usuario digita en la caja de texto (input) 'Buscar'
		var filtroBusqueda = $( "#busqueda" ).val();

		// filtrar
		canciones = canciones.filter( x => {
			const nombreMayus = x.nombre.toUpperCase();
			const filtroBusquedaMayus = filtroBusqueda.toUpperCase();
			if(nombreMayus.includes(filtroBusquedaMayus)){
				return 1;
			}else{
				return 0;
			}
		})

		// Ordena el JSON de las canciones por numero de reproducciones
		canciones = canciones.sort(function(a,b){
		if(b.reproducciones > a.reproducciones){
			return 1;
		} else{
			if(b.reproducciones < a.reproducciones){
				return -1;
			}else{
				return 0;
			}
		}
		});

		  // Generar contenido dinamico
		var htmlTablaDinamica = '';
		
		 //Selecciona los eventos
		for(var i = 0; i < canciones.length; i++){
			htmlTablaDinamica +=  `
				   <div class="col-md-4">
				<div class="c5  text-center">
				  <img src="${ canciones[i].icono} " class="img-responsive" alt="Imagen responsive"  WIDTH="100"  HEIGHT="100">
				</div>
				<div class="c6  text-center ">
				  <h1>${ canciones[i].nombre} </h1>
				  <audio  src="${ canciones[i].ruta}" controls="controls" type="audio/mpeg" preload="preload" > </audio>
				</div>
			  </div>
			  `
		}

		// Concatena al div "informacion" el html generado con las canciones (html)
	    document.getElementById("informacion").innerHTML = htmlTablaDinamica
	  })
}



$(document).ready(function(){
	filtrarDatos()
	$( "#busqueda" ).keydown(function() {
		filtrarDatos();
	  });
})


