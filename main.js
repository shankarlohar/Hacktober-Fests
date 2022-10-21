$(window).scroll(function(){
  $('nav').toggleClass('scrolled',$(this).scrollTop()>50)
});
$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos < 50) {
          $('.hvr-reveal').css('color', '#FFFFFF');
          $('.navbar-toggler-icon').css('background-image',' url("img/white.png")')
      } else {
          $('.hvr-reveal').css('color', '#FFFFFF');
          $('.navbar-toggler-icon').css('background-image',' url("img/white.png")')
      }
  });
});

