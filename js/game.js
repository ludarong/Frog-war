$(function() {
	var sign = $(".sign");
	sign.on("click", function() {
		sign.css("display", "none");
		$(".up").css("display", "block");
	});//信封出现
	//首页大图滚动
	var num = 0;
	var bigbgnum = $(".bgall div").length;
	$(window).on("resize", function() {
		$(".bgall div").width($(window).width());
	});
	for (var i = 0; i < bigbgnum; i++) {
		$(".bgall div").eq(i).css('background-image', 'url(img/bg' + (i + 1) + '.jpg)');
	};
	$(".bgall").html($(".bgall").html() + $(".bgall").html());
	$(".bgall div").width($(window).width());
	$(".bgall").width($(".bgall div").eq(0).width() * bigbgnum);
	$(".right").on("click", function() {
		num++;
		$(".choose ul li").removeClass("chooseactive");
		$(".choose ul li").eq(num).addClass("chooseactive");
		if (num >= bigbgnum) {
			num = 0;
		}
		$(".bgall").animate({
			"left": -$(window).width() * num
		});
		$(".clicks div").css("background-position", "30px 0");
		$(".clicks div").eq(num).css("background-position", "0 0");
	});
	$(".left").on("click", function() {
		num--;
		$(".choose ul li").removeClass("chooseactive");
		$(".choose ul li").eq(num).addClass("chooseactive");
		if (num <= 0) {
			num = bigbgnum - 1;
		}
		$(".bgall").animate({
			"left": -$(window).width() * num,
		});
		$(".clicks div").css("background-position", "30px 0");
		$(".clicks div").eq(num).css("background-position", "0 0");
	});
	$(".clicks div").on("click", function() {
		var ckindex = $(this).index();
		num = ckindex;
		$(".choose ul li").removeClass("chooseactive");
		$(".choose ul li").eq(num).addClass("chooseactive");
		$(".clicks div").css("background-position", "30px 0");
		$(this).css("background-position", "0 0");
		$(".bgall").animate({
			"left": -$(window).width() * num,
		});
	});
	$(".choose ul li").on("click", function() {
		var chindex = $(this).index();
		num = chindex;
		$(".choose ul li").removeClass("chooseactive");
		$(this).addClass("chooseactive");
		$(".clicks div").css("background-position", "30px 0");
		$(".clicks div").eq(num).css("background-position", "0 0");
		window.location.href = "game"+(num+1)+".html";
		$(".bgall").animate({
			"left": -$(window).width() * num,
		});
	});
	$(".ok").on("click",function(){
		if($(".name").val()==''||$(".email").val()==""){
			$(".name,.email").css("border-color","#f00");
			$(".label1,.label2").css("color","#f00");
			$(".prompt").css("display","block");
		};
	});
});





		