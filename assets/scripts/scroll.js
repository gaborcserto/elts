function scrollTop() {
    var offset_top = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
        scroll_top_duration = 1000,
    //grab the "back to top" link
        $back_to_top = $('.scroll__top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset_top ) ? $back_to_top.addClass('scroll__top-visible') : $back_to_top.removeClass('scroll__top-visible scroll__top-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('scroll__top-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(e){
        console.log('jaj');
        e.preventDefault();
        $('html, body').animate({scrollTop : 0}, scroll_top_duration, 'easeInOutExpo');
        return false;
    });
}

function navigationScroll() {
    $("a[href^='#section__']").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        },	1000, function () {
            window.location.hash = hash
        });

    });
}