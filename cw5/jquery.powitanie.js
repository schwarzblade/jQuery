(function($){

    $.fn.powitanie = function() {
	this.each(function() {
	    $(this).html("Witaj");
	});
	return this;
    };

    $.fn.pozegnanie = function() {
	this.each(function() {
	    $(this).html("zegnaj");
	});
	return this;
    };
})(jQuery);