$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 100) { 
        $('.navbar').removeClass('bodyHeader');
          $('.navbar').addClass('transparentNavbar');
      } else {
          $('.navbar').removeClass('transparentNavbar');
          $('.navbar').addClass('bodyHeader');

      }
    });
});