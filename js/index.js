$(function () {
     var headtop = $('.header').offset().top;
       var flag = true;
       scrollTop
     $('.bd p,.fadein').css({
          transform: 'translateY(-200px)',
          opacity: '1',
     },)
     
     $('.content').fadeToggle(2000);
     $('.header nav ul li').on('click', function () {
          var i = $(this).index();
          flag = false;
          addclass(i);
          scrollTop(i)
        
     $('.list').eq(i).children('.hid').css({display:'block'});
      
     })
     $('.me').on('click', function () {
          flag=false;
          var i = 1;
          scrollTop(i);
     })
     $('.work').on('click', function () {
          flag = false;
          var i = 3;
          scrollTop(3);
     })

     function addclass(i) {
          $('nav li').eq(i).addClass('current').siblings('li').removeClass();
     }

     function scrollTop(i) {
          $('html,body').stop().animate({
               scrollTop: $('.list').eq(i).offset().top
          },1000)
     }

     $(window).scroll(function () {
          flag = true
         $('.list').each(function (i, e) {
              var t1 = $(this).offset().top-40;
              var h1 = $(window).scrollTop();
              if (flag) {
                   if (h1 >= t1 ) {
                        $('nav li').eq(i).addClass('current').siblings('li').removeClass();
                        $('.list').eq(i).find('.hid').css({
                             opacity: '1'
                        })
                   }
              }
         })
  
          if ($(document).scrollTop() >= headtop) {
               $('.header').css('position', 'fixed')
          } else {
               $('.header').css('position', 'relative')
          }

     })
})