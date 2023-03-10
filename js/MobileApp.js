$(function(){
    var $testimonialsDiv = $('.testimonials');
if ($testimonialsDiv.length && $.fn.owlCarousel) {
    $testimonialsDiv.owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
    });
}

var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel) {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: ['<span class="fa fa-arrow-left"></span>', '<span class="fa fa-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }
})