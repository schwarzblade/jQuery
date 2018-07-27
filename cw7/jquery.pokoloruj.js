(function($) { 
    $.fn.pokoloruj = function(kolor) {
	this.each(function() {
	    $(this).css('color', kolor);
});
return this;
};
})(jQuery);