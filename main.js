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

//LOGIN AND SIGNUP
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});