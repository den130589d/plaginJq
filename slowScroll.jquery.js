(function($){
	var settings = 1000;

	$.fn.slowScroll = function(option){
		if(option != false && typeof option == 'number'){
			settings = option;
		}
		$(this).on('click', function(e){
			e.preventDefault();
			var t = $(this).attr('href');
			var s = $(t).offset().top;
			$('body', 'html').animate({scrollTop : s}, settings)
			
			

		});	

		
	}

	

})(jQuery)