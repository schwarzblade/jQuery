
    $.fn.pokoloruj = function() {
	if(arguments.length == 1) {
	var tekst = arguments[0];
	this.each(function() {
	    $(this).html(tekst);
    });
    } else if (arguments.length == 2) {
	var kolor = arguments[0];
	var tlo = arguments[1];
	    this.each(function() {
		$(this)
			.css('color',kolor)
			.css('background', tlo);
	});
    }
    return this;
};