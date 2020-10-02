jQuery(function($) {'use strict';

	$(document).ready(function() {

		//Stucked header
		stucked();


		// Navigation Scroll
		navigationScroll();

		//Background change
		backgroundChange();

        //Scroll top
        if($(window).width() > 768) {
            scrollTop();
        }

        //Toggle navigation
        toggle();

        $('#teachers-carousel').carousel({
            interval: false
        });

	});

    $(window).resize(function(){
        stucked();
        toggle();
    });

    $(window).scroll(function(){
        stucked();
    });
});

new WOW({mobile: false}).init();

function toggle() {
    if($(window).width() < 768) {
        $('.nav a').on('click', function () {
            $(".navbar-toggle").click()
        });
    }
}