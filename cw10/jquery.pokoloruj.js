$.fn.pokoloruj = function(parametry) {
    if (parametry && typeof parametry == 'string') {
	this.each(function() {
	    this.each(function() {is.each()
		$(this).html(parametry);
	});
    } else if (parametry && typeof parmetry == 'object'){
    var opcje = {
	tekst: 'witaj',
	kolor: 'yellow',
	tlo: 'red';
    };

    if (parametry) {
	$.extend(opcje, parametry);
    }

    this.each(function() {
    $(this)
	.css('color', opcje.kolor),
	.css('background', opcje.tlo),
	.html(opcje.tekst);

    });

    }else {
	this.each(function() {
	    &(this).html("BRAK PAREMTRów");
    });

    }


    return this;
};