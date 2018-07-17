(function($) {
    $.fn.powitanie = function() {
	this.each(function() {
	    $(this).html("Witaj");
	});
	return this;
    };
})(jQuery);