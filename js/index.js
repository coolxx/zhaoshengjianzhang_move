$(function(){
	var $height=$('.nav_bg').position().top
	$(document).scroll(function(){
		var $top=$(document).scrollTop();
		if($top>=$height){
			$('.nav_bg').css({'position':'fixed','top':0});
			$('.subst').css('display','block')
		}
	})
	$(document).scroll(function(){
		var $top=$(document).scrollTop();
		if($top<=$height){
			$('.nav_bg').css('position','');
			$('.subst').css('display','none')
		}
	})
	$('.l_area p').each(function(index){
		$(this).click(function(){
			$('.l_area p').removeClass('on1').eq(index).addClass('on1');
			$('.area_sch').hide().eq(index).show()
		})
	})
})