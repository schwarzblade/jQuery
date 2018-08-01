(function($){
    $.fn.wskaznik = function() {
	var url = location.href;
	var re = /([a-z]+)\.html$/
	var wynik = url.match(re);
	this.first().attr('id',wynik[1]);
    };
})(jQuery);






