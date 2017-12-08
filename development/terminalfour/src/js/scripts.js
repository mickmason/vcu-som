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
    var $landingNav      = $('.landing-page-navigation');
    var $landingNavToggle= $('.landing-page-nav__toggle');
    $landingNavToggle.on('click', function(event) {
        event.preventDefault();
        $('.landing-page-nav__body-wrap').slideToggle(240, function() {
            $landingNav.toggleClass('is-active');
        });
    });
    /* Main, secondary navigation icons */
    //The main nav icon in mobile
    //Mobile nav toggle links
    var $mobileNavToggles = [$('.main-nav-toggle__mobile .navbar-link'), $('.secondary-nav-toggle--mobile > .navbar-link'),  $('.site-search-toggle--mobile > .navbar-link')];
    //Mobile nav dropdowns
    var $mobileNavDropdowns = [$('.main-navigation__menu'), $('.secondary-nav--mobile__menu'),  $('.site-search-form')];
    //Clears all visible navs other than this one, removes .is-active from the link and from the dropdown - called when a toggle link is clicked.
    function clearActiveNavs($this) {
        $mobileNavToggles.forEach(function(el, idx) {
            if ($(el).hasClass('is-active') && $(el).is($this) === false) {
                $(el).removeClass('is-active');
                ($($mobileNavDropdowns[idx]).hasClass('is-active')) ? $($mobileNavDropdowns[idx]).removeClass('is-active') : false;
            }
        })
    }
    //Nav toggle links
    $('.main-nav-toggle__mobile .navbar-link').on('click', function(event) {
        event.preventDefault();
        clearActiveNavs($(this));
        $(this).toggleClass('is-active');
        $('.main-navigation__menu').toggleClass('is-active');
    });
    //The secondary nav icon in mobile
    $('.secondary-nav-toggle--mobile > .navbar-link').on('click', function(event) {
        event.preventDefault();
        clearActiveNavs($(this));
        $(this).toggleClass('is-active');
        $('.secondary-nav--mobile__menu').toggleClass('is-active');
    });
    //Site search mobile, desktop
    $('.site-search-toggle--mobile > .navbar-link').on('click', function(event) {
        event.preventDefault();
        clearActiveNavs($(this));
        $(this).toggleClass('is-active');
        $('.site-search-form').toggleClass('is-active'); 
    }); 
    $('.main-navigation__search-toggle .navbar-link').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('is-active');
        $('.site-search-form').toggleClass('is-active'); 
    });
    //Secondary nav mobile dropdowns
    $('.secondary-nav--mobile__link.has-dropdown').on('click', function(event) {
        event.preventDefault();
        $('.secondary-nav--mobile__menu .navbar-dropdown.is-active').not( $(this).siblings('.navbar-dropdown')).removeClass('is-active');
        $('.secondary-nav--mobile__link.has-dropdown.is-active').not($(this)).removeClass('is-active');
        $(this).toggleClass('is-active');
        $(this).siblings('.navbar-dropdown').toggleClass('is-active');     
    });
    //Main nav mobile handler
    function addMainNavClickHandlers() {
        $('.main-navigation__menu .main-navigation__item.has-dropdown .navbar-link--main').off('click');
        if ($(window).outerWidth() < 1024) {
            $('.main-navigation__menu .main-navigation__item.has-dropdown .navbar-link--main').each(function(idx) {
                 $(this).on('click', function(event) {
                     $('.main-navigation__menu .navbar-dropdown.is-active').not($(this).siblings('.navbar-dropdown')).removeClass('is-active');
                     $('.navbar-link--main.is-active').not($(this)).removeClass('is-active');
                     $(this).toggleClass('is-active');
                     $(this).siblings('.navbar-dropdown').toggleClass('is-active'); 
                });
            });
        }
     } 
     addMainNavClickHandlers();
     $(window).on('resize', addMainNavClickHandlers);
    
    
    
}());