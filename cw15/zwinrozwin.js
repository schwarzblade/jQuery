(function() {
    $.fn.zwinrozwin = function() {
	this.each(function() {
	    $(this)
		.find('h3')
		    .prepend('<a href="#">+</a>')
		    .end()
		.find('p')
		    .hide()
		    .end()
		.find('a')
		    .click(function(){
		    if ($(this).html() == '+') {
			$(this).html('-').parent().next().show();
		    } else {
			$(this).html('+').parent().next().hide();
		    }
	});
    });
    return this;
    };
})(jQuery);