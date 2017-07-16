(function() {
	// ** Events here ** //

	$(document).on('click', '.toogle-btn', function(event) {
		event.preventDefault();
		$(this).toggleClass('opened');
		$(this).siblings('.answer').toggleClass('opened').slideToggle( "slow");
	})

	$(document).ready(function() {
      $("body").tooltip({ selector: '[data-toggle=tooltip]', html: true });
  	});

})();
//# sourceMappingURL=main.js.map
