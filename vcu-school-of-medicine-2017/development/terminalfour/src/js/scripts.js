// Add your custom JavaScripts to this file
!/* Build scripts */
(function() {
    var myVar = 'Michael'; 
    
    
    /** 
     ** Slick instances **
    **/
    //News slider feature - big slider in content areas
    
    $('.news-slider__slick').on('reInit', function(slick) {
        console.log(slick + " "+$(this));
        $('.news-slider .slick-list').css({overflow: 'visible'});
    });
    $('.news-slider__slick').slick({
        accessibility: true,
        dots: true,
        focusOnSelect: true,
        centerMode: false,
        slide: '.news-slider__slide',
        prevArrow: '.news-slider__controls__prev',
        nextArrow: '.news-slider__controls__next',
        appendArrows: '.news-slider__controls',
        appendDots: '.slick-dots-container',
        speed: 1000,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 787,
                settings: {
                }
            }
        ]
    }); 
}());
