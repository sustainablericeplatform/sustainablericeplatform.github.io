$(document).ready(function() {
    $('.slideshow').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    // Get Involved section
    $('.company-title').on('click touch', function(event) {
        event.preventDefault();

        $(this).closest('li').find('.company-details-wrap').toggleClass('hidden');
    });
});
