$(function(){
  $('.line').animate({"width":"100%"},1500,function(){
    $(".line").css("right",0)
    $(".line").animate({"width":"0%"},function(){
      $('.up').animate({"height":"0%"});
      $('.down').animate({"height":"0%"},500,function(){
        $('.hero-p').fadeIn("slow")
      });
    });
  })
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    centerMode:true,
    centerPadding:"100px",
    infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          arrow:true,
          fade: true,
          asNavFor: '.slider-nav',
    centerMode:true,
    centerPadding:"100px",
  });
  
  $('.slider-nav').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider', //スライダー本体のクラス名
    focusOnSelect: true,
          prevArrow: '<button class="slide-arrow prev-arrow"></button>',
         nextArrow: '<button class="slide-arrow next-arrow"></button>',
  })

  $('.fa-bars').click(function(){
    var $header=$('.header2-nav');
    if($header.hasClass('open')){
      $header.removeClass('open');
      $header.slideUp(500);
    }else{
      $header.addClass('open');
      $header.slideDown(500);
    }
  });

  $('header a').click(function(){
    var id=$(this).attr('href');
    var position=$(id).offset().top;

    $('html,body').animate({
      "scrollTop":position
    },500);
  });

  $('.header-nav a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html,body').animate({
     "scrollTop":position
    },500);
  });  
  
  $(window).scroll(function () {
    
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 50;
    
    
    $(".skill-item").each(function (i) {
        if(effectPos > $(this).offset().top){
            var that = this;

           
            setTimeout(function () {
               $(that).addClass("fadein");
            }, 250 * i);
        }
    });
});

$('.animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = jQuery(window).height(),
     topWindow = jQuery(window).scrollTop();
 $('.animation').each(function(){
  var targetPosition = jQuery(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   jQuery(this).addClass("fadeInDown");
  }
 });
});
$('.fa-chevron-up').click(function(){
  $('html,body').animate({
    'scrollTop':0
  },800)
});
$('.link').hover(
  function(){
    $(this).animate({
      'font-size':'35px'
    },400);
  },
    function(){
      $(this).animate({
        'font-size':'30px'
      },400);
    }
)

  
  
  
});