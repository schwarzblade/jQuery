(function($){
$.fn.pokoloruj = function(parametry) {
    if (parametry && typeof parametry == 'string') {
	this.each(function() {
	    $(this).html(parametry);
	});
    } else if (parametry && typeof paramtery == 'object') {
	var opcje = {
	    tekst: 'Witaj',
	    kolor: 'red',
	    tlo:   'yellow'
	};
     if (parametry) {
	$.extend(opcje, parmetry);
	}
    this.each(function() {
	$(this)
	    .css('color', opcje.kolor)
	    .css('background', opcje.tlo)
	    .html(opcje.tekst);
    });
    } else {
	this.each(function() {
	    $(this).html('BRAK PARMAETROW');
    });
}
return this;
};
})(jQuery);
