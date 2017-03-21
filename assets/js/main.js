$(document).ready(function() {
    if($(window).width() > 420) {
        $('.slideshow').slick({
            autoplay: true,
            arrows: false,
            dots: true,
            speed: 1000,
        });
    }


    // Get Involved section
    $('.company-title').on('click touch', function(event) {
        event.preventDefault();

        $(this).closest('li').find('.company-details-wrap').toggleClass('hidden');
    });
});
