(function($) {
    $.fn.powitanie = function() {
	this.each(function() {
	    $(this).html('Witam');
    });
    return this;
};

})(jQuery);