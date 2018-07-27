(function($) {
    $.fn.lorem = function() {
	this.each(function() {
	    $(this).html( 'Lorem ipsum...');
	});
	return this;
    };
})(jQuery);