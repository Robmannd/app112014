var correo='';
var accesorio=[];

var cambiar_pagina= function(id){


	$(":mobile-pagecontainer").pagecontainer( "change", id, { role: "page" , transition:"slide"} );

};

var regresar_pagina= function(id){


	$(":mobile-pagecontainer").pagecontainer( "change", id, { role: "page" , transition:"slide" , reverse : true } );

};

$(document).on( 'pageinit', cuando_inicia)

	function cuando_inicia(){


		$('#preparar').click(function(event){

			correo = $('#correo').val();
		
			if (correo !== ''){

				cambiar_pagina('#deportes-accesorios');
			}

			});
	
		
}

$(document).on( 'pageinit', '#deportes-accesorios', cuando_inicia_accesorios );

function cuando_inicia_accesorios(){

	$('.ui-bar').click(function(event) {
		/* Act on the event */

		if( $(this).hasClass('active') ){

			//Quitar Clase
			
			$(this).removeClass('active');

			var removeItem = $(this).data('accesorios');

			accesorio = jQuery.grep(accesorio, function(value) {
				return value != removeItem;
			});

		} else {

			$(this).addClass('active');

			var val_accesorio = $(this).data('accesorios');

			accesorio.push(val_accesorio);

		}

		console.log(accesorio);


	});


	$('#deportes-accesorios .back').click(function(e) {
		/* Act on the event */

		e.stopImmediatePropagation();
		e.preventDefault();

		regresar_pagina('#deportes-home');
	});


	$('#deportes-accesorios .next').click(function(e) {
		/* Act on the event */

		e.stopImmediatePropagation();
		e.preventDefault();

		cambiar_pagina('#deportes-pedidos');
	});
	
}


//Page Pedidos

$(document).on( 'pageinit', '#deportes-pedidos', cuando_inicia_pedidos );

function cuando_inicia_pedidos(){

	//colocar el correo
	$('.get-correo').text(correo);





	$.each(accesorio, function(index, val){
		/*interate trough array or objet */
		$('ul').append('<li>'+val+'</li>');
	});



	$('#deportes-pedidos .back').click(function(e) {
		/* Act on the event */

		e.stopImmediatePropagation();
		e.preventDefault();

		regresar_pagina('#deportes-accesorios');
	});
	
}