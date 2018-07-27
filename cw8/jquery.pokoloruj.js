(function($) { 
$.fn.pokoloruj = function(kolor) {
    var domyslnie = 'yellow';
    if(!kolor) {
	kolor = domyslnie;
    }
    this.each(function() {
	$(this).css('color',kolor);
});
return this;
};
})(jQuery);