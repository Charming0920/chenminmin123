
var mySwiper = new Swiper ('.swiper-container', {
   	direction: 'vertical',
   	noSwiping : true,
	noSwipingClass : 'stop-swiping',
	nextButton:'.swiper-button-next',
	    
    // 如果需要分页器
//  pagination: '.swiper-pagination',
    
    watchSlidesProgress : true,	

    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    	swiperAnimateCache(swiper); //隐藏动画元素 
    	swiperAnimate(swiper); //初始化完成开始动画
  	}, 
  	onSlideChangeEnd: function(swiper){   		
    	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    	
  	} 

}) 


// mySwiper.slideTo(1,2000,false)



//指纹解锁
touch.on('#fingerprint', 'hold', function(ev){

    var mySwiper1 = new Swiper ('.swiper-container', {
	   	direction: 'vertical',
	   	//noSwiping : true,
		//noSwipingClass : 'stop-swiping',
		nextButton:'.swiper-button-next',
		initialSlide :4, 
		
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    	swiperAnimateCache(swiper); //隐藏动画元素 
    	swiperAnimate(swiper); //初始化完成开始动画
  	}, 
  	onSlideChangeEnd: function(swiper){   		
    	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    	
  	} 
		
	}) 
	
	$(".slide_4").removeClass("stop-swiping");

});

 
//接电话后iphone铃声停，斧头帮音乐响起来
$(".swiper-button-next").click(function(){
	$("#playImg").css("visibility","visible");
	$("#iphone_music")[0].pause();
	$("#musicplayer")[0].play();
})

//背景音乐播放暂停
function playorpaused (obj) {
	//通过id来找到音乐播放器
	var musicplayer = document.getElementById("musicplayer")
	if (musicplayer.paused) {
		//当音乐是暂停的时候，我们让音乐播放
		musicplayer.play();
		obj.src = "img/musicBtn.png";
		//动画继续执行
		obj.style.webkitAnimationPlayState = "running";
	} else{
		//当音乐是播放的时候，我们让音乐暂停
		musicplayer.pause();
		obj.src = "img/musicBtnOff.png";
		//动画暂停
		obj.style.webkitAnimationPlayState = "paused";
	}
}



//$('#main').on('click tap swipeUp', function(){
//$.ui.loadContent("#page1",false,false,"up");
//loadbgmusic();
//});










