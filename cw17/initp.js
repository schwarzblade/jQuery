(function($){
    $.fn.initp = function(znacznik){
	if(!znacznik){
	    znacznik = 'strong';
	}

    this.each(function(){
	$(this).contents(':first-child').filter(function(){
	    return (
		(this.nodeType == 3) &&
		($(this).text().replace(new RegExp("^\\s+"),''))
	    );
    }).each(function(){
	var t= this.textContent;
	var napisik = t.replace(new RegExp("^\\s+"),'');
	var pierwsza = napisik.slice(0,1);
	var reszta = napisik.slice(1);
	this.textContent = reszta;
	$(this).parent().prepend(
	    '<' + znacznik + '>' +
	    pierwsza + 
	    '</' + znacznik + '>'
	);
    });
});
return this;
};
})(jQuery);