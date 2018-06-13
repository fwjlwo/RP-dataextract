/* Pega links mais rápido */ 

var linksList = $('#parlamentarians #grid-ranking > ul.visible-md.visible-lg');
linksList.each(function(i, v) {
	console.log( window.location.origin + encodeURI( $(this).data('url') ) );
	
});