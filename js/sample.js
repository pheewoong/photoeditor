
$(document).ready(function(){
	// 이미지 사이즈별 레이아웃 구성
	var $itemImg = $("ul.js-sticker-list img")
	var $itemImgli = $("ul.js-sticker-list li")
	
	$itemImg.each(function() {
		if ($(this).width() > ($(this).height() * 2)) {
			$(this).addClass("js-size-rectangle");
			
		} else 
			$(this).addClass("js-size-square");
	})
	
	$itemImgli.has('.js-size-rectangle').addClass('division__single')
	$itemImgli.has('.js-size-square').addClass('division__half')
		
	
	var itemOffset = $('.item-box').offset();
	var areaOffset = $('.side-contents__body').offset();
	
	$('.js-side-contents__body').scroll(function() {
		if ($itemOffset.offset().top > $areaOffset.offset().top) {
			$('.js-side-contents__header').addClass('shadow');
		} else 
			$('.js-side-contents__header').removeClass('shadow');
		
	});
	
	
});

