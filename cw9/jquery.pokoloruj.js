(function($) {
    $.fn.pokoloruj = function(parametry) {
	var opcje = {
	    tekst: "Witaj",
	    kolor: 'red',
	    tlo: 'yellow'
	};

	if (parametry) {
	    $.extend(opcje, parametry);
	}

	this.each(function() {
	    $(this)
		.css("color", opcje.kolor)
		.css("background", opcje.tlo)
		.html(opcje.tekst);
      });

	return this;
};

})(jQuery);