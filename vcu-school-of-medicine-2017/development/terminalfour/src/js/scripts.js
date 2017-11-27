// Add your custom JavaScripts to this file
!/* Build scripts */
(function() {
    var myVar = 'Michael'; 
    
    /*
    * Load SVG via AJAX for IE10
    */
    /*var $ajax = new XMLHttpRequest();
    $ajax.open('GET', 'style-assets/media/svg/dfa-icons.svg', true);
    $ajax.onreadystatechange = loadSVGs;
    $ajax.send();
    
    function loadSVGs() { 
      if ($ajax.readyState === 4) {
          if ($ajax.status === 200) {
            var responseContentType = $ajax.getResponseHeader("Content-Type"); 
            if (responseContentType.indexOf('image/svg+xml') !== -1) {
                var div = document.createElement("div");
                div.setAttribute('class', 'dfa-icons-stack');
                div.innerHTML = $ajax.responseText;
                document.body.insertBefore(div, document.body.childNodes[0]);    
            } else {
                $('body').addClass('no-svg');
            }
          } else {
            console.log('Load SVG HTTP status is: '+$ajax.status);
          }
      }
    }*/
    /** 
      ** Plugins
    **/
    /** Slick instances **/
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
    
    /** 
      ** Custom Scripts 
    **/
    var audienceNav = document.querySelector('.audience-navigation');
    var audienceNavToggle = document.querySelector('.audience-nav__toggle');
    audienceNavToggle.addEventListener('click', function(event) {
        event.preventDefault();
        $('.audience-navigation__body-wrap').slideToggle(240, function() {
            audienceNav.classList.toggle('is-open');
        });
    });
}());