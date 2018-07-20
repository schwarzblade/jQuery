(function($) {
    $.trimLeft = function(str) {
	if(typeof str == 'string') {
	    return str.replace(new RegExp("^\\s+"), '');
        }
    };
})(jQuery);