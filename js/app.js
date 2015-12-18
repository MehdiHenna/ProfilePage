$(document).ready(function(){

	

	var url = "https://s.idsympa.com/u-06.json";

	
	$.getJSON(url, function(data){

		var template = $('#template').html();
		
		Mustache.parse(template);	
		
		var rendered  = Mustache.render(template, data);

		$('body').html(rendered);		

	});

	$('body').on("click", "a", function(){

		$(".texte").hide();

		var id = $(this).attr('href');

		$(id).toggle();
	
	});


});

