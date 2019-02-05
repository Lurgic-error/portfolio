$(document).ready(function() {
	$('#fullpage').fullpage();
});

$('.carousel').carousel({
    interval: 2000
  })

/*================================================
				            Stats
==================================================*/
$(function(){
  $('.counter').counterUp({
      delay:10,
      time:1000
  });
});

/*================================================
				            Farmer's Testimonials
==================================================*/
$(function(){
  $('#farmers-testimonials').owlCarousel({
    items:1,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true
  });
});

/*====================================================
                        CLIENTS
====================================================*/
$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 3
		  },
		  768: {
			items: 5
		  },
		  992: {
			items: 6
		  }
		}
    });
});

/*====================================================
                        WORK
====================================================*/
$(function () {

    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});

/*====================================================
                        NAVIGATION
====================================================*/
// Show/Hide transparent black navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("shamba-faida-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("shamba-faida-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});
// Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// Close mobile menu on click
$(function(){

    $(".navbar-collapse ul li a").on("click touch", function(){

        $(".navbar-toggle").click();
    });
});
