$(".main-site-nav a").click(function(event){
	$(".main-site-nav a").removeClass("selected");
    $("#profit").addClass("selected");
});
$("#profit").click(function(){
	$(".begin").slideUp(300, function() {
		$(".hidden-block").slideDown();

	});
	
});



