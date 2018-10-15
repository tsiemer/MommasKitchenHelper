$(function () {
    var lastScrollTop = 0;
    var $navbar = $('.navbar');
    var $fixedContainer = $('.fixed');
  
    $(window).scroll(function(event){
      var st = $(this).scrollTop();

      if (st > lastScrollTop) {
        $navbar.fadeOut()
        $fixedContainer.removeClass("navbarBackground")
      } else if (st === 0){
        $navbar.fadeIn()
        $fixedContainer.removeClass("navbarBackground")
      } else { 
        $navbar.fadeIn()
        $fixedContainer.addClass("navbarBackground")
      }
      lastScrollTop = st;
    });
  });


