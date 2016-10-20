(function ($) {
	var settings = {
		position : 'fixed',
		left: 70 + '%',
		opacity: 0.7,
		top : 20,
		width : 300,
		background : 'gray'


	}
	


	$.fn.follow = function(option, hide, time){

		settings = $.extend(settings, option);

		$('<div></div>',{'id' : 'followWrap'}).css(settings).appendTo('body');
		for (var i = 0; i < 3; i++) {
			$('<div></div>',{'id' : 'string' + [i] }).appendTo('#followWrap');
		}


	
		$(window).on('scroll', function(){
			var currentScroll = $(this).scrollTop();
			var hPage = $(this).height();
			var hBody = $('body').height();
			var sumPage = (hBody/hPage)
			
			
			$('#followWrap').css('display', 'block' );
			if(hide === true){setTimeout(function(){$('#followWrap').css('display', 'none' )}, 6000);}
			$('#string0').text('Текущий скролл px:' + currentScroll);
			$('#string1').text('Текущий скролл %:' + Math.floor(currentScroll / ((hBody-hPage)/100)) );
			var currentPage = 0;
			if(currentScroll<hPage){
				currentPage = 1;
			}
			if(currentScroll>hPage && currentScroll<(hPage*2)){
				currentPage = 2;
			}
			if(currentScroll>(hPage*2) && currentScroll<(hPage*3)){
				currentPage = 3;
			}
			if(currentScroll>(hPage*3) && currentScroll<(hPage*4)){
				currentPage = 4;
			}

			$('#string2').text('Текущий страница:' + currentPage + '/' + Math.floor(sumPage));

		})
	}
	
})(jQuery)