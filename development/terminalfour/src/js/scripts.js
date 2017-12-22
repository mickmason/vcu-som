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
    $('.news-slider__slick').slick({
        dots: true,
        slidesToShow: 1,
        slide: '.news-slider__slide',
        prevArrow: '.news-slider__controls__prev',
        nextArrow: '.news-slider__controls__next',
        appendArrows: '.news-slider__controls',
        appendDots: '.slick-dots-container',
        speed: 400,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1040,
                settings: {
                    centerMode: true,
                    centerPadding: '2%',
                    slidesToShow:1
                }
            },
            {
                breakpoint: 1140,
                settings: {
                    centerMode: true,
                    centerPadding: '3%',
                    slidesToShow:1
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    centerMode: true,
                    centerPadding: '4%',
                    slidesToShow:1
                }
            },
            {
                breakpoint: 1540,
                settings: {
                    centerMode: true,
                    centerPadding: '6%',
                    slidesToShow:1
                }
            },
            {
                breakpoint: 1640, 
                settings: {
                    centerMode: true,
                    centerPadding: '10%',
                    slidesToShow:1
                }
            },
            {
                breakpoint: 1780, 
                settings: {
                    centerMode: true,
                    centerPadding: '12%',
                    slidesToShow:1
                }
            }
        ]
    }); 
    //Video gallery 
    
    $('.gallery-feature__slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slide: '.gallery-feature__slider .video-slider-card',
        prevArrow: '.video-gallery-feature .slider-control.slider-control__prev',
        nextArrow: ' .video-gallery-feature .slider-control.slider-control__prev',
        appendDots: '.video-gallery-feature .slick-dots-container',
        responsive: [
            {
                breakpoint: 787,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '30.9015%',
                    breakpoint: 1024
                }
            }
        ]
    }).on('beforeChange');
    $('.video-slider-card.slick-slide').not('.slick-current').on('click', function(event) {
        event.preventDefault();
        console.log('click '+$(this).data('slick-index'));        
        $('.gallery-feature__slider').slick('slickGoTo', Number.parseInt($(this).data('slick-index')));
    });
    $('.som-lightbox__slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slide: '.som-lightbox__slider .som-lightbox-item',
        prevArrow: '.som-lightbox__slider .slider-control.slider-control__prev',
        nextArrow: '.som-lightbox__slider .slider-control.slider-control__prev',
        appendDots: '.som-lightbox__slider .slick-dots-container',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '14.58881%',
                    breakpoint: 1024
                }
            }
        ]
    }); 
    $('.discovery-feature  .discovery-feature__slider').slick({ 
        mobileFirst: true,
        slide: '.discovery-feature__slider .discovery-feature__slide',
        prevArrow: '.discovery-feature__slider__controls .slider-control__prev', 
        nextArrow: '.discovery-feature__slider__controls .slider-control__next', 
        appendArrows: '.discovery-feature__slider__controls',
        appendDots: '.discovery-feature__slider__controls .slick-dots-container', 
        slidesToShow: 1
    });
    $('.hero-slider__slider').slick({ 
        mobileFirst: true,
        slide: '.hero-slider__slide',
        prevArrow: '.hero-slider__controls__prev', 
        nextArrow: '.hero-slider__controls__next', 
        appendArrows: '.slider__controls',
        appendDots: '.slick-dots-container' 
    });
    /** 
      ** Custom Scripts 
    **/
    /** 
     ** SoM Custom lightbox - Michael Mason 
    **/
    
    if ($('.som-lb-item').length > 0) {
        $('.som-lb-item').on('click', showSoMLightbox);
        $('.som-lightbox__close').on('click', function (event) {
            event.preventDefault();
            $('.som-lightbox').removeClass('is-visible');
            $('body').removeClass('has-lightbox-active');
        });
    }
    function showSoMLightbox(event) {
        event.preventDefault();
        var galleries = {};
        var galleryItems = [];
        var galleryTitle = "";
        var $lightBox = $('.som-lightbox');
            var $thisItem = $(this);
            console.log($thisItem);
            if ($thisItem.data('lightboxGallery') !== "" && $thisItem.data('lightboxGallery') !== undefined) {
                var galleryTitle = $thisItem.data('lightbox-gallery');
                var galleryItems = $('[data-lightbox-gallery="'+ galleryTitle + '"]');
            } else {
                var thisTitle = $thisItem.data('lightbox-title');
                var $lightBoxTitleH2 = $('<h2 />').append(thisTitle);

                var $lightBoxTitle = $('<div class="som-lightbox__title" />').append($lightBoxTitleH2);

                var thisCaption = $thisItem.data('lightbox-caption');
                console.log(thisCaption);
                var $lightBoxCaptionP = $('<p />').text(thisCaption);
                        
                var $lightboxCaption = $('<div class="som-lightbox__caption" />').append($lightBoxCaptionP);

                var thisUrl = $thisItem.data('lightbox-url');
                var thisMediaType = $thisItem.data('lightbox-media-type');
                var $lightBoxMediaContents;
                if (thisMediaType === 'img') {
                    $lightBoxMediaContents = $('<img />');
                    $lightBoxMediaContents.attr('src', thisUrl);
                    $lightBoxMediaContents.attr('attr', thisTitle);
                } else if (thisMediaType === 'video') {
                    $lightBoxMediaContents = $('<video />');
                    $lightBoxMediaContents.attr('height', '315');
                    $lightBoxMediaContents.attr('width', '560');
                    $lightBoxMediaContents.attr('src', thisUrl);
                    console.log('Media contents '+$lightBoxMediaContents);
                } else if (thisMediaType === 'youtube-video') { 
                    $lightBoxMediaContents = $('<iframe />');
                    $lightBoxMediaContents.attr('height', '315');
                    $lightBoxMediaContents.attr('width', '560');
                    $lightBoxMediaContents.attr('src', 'https://www.youtube.com/embed/'+$thisItem.data('lightbox-youttubeid')+'?autoplay=1rel=0');
                }

                var $lightBoxMedia = $('<div class="som-lightbox__media" />');
                $lightBoxMedia.addClass('video is-16by9');
                $lightBoxMedia.append($lightBoxMediaContents);
                console.log($lightBoxMedia);
                var $lightBoxItem = $('<div class="som-lightbox-item" />');
                $lightBoxItem.append($lightBoxTitle).append($lightBoxMedia).append($lightboxCaption);

                $lightBox.find('.som-lightbox__player').empty().append($lightBoxItem);
                $('body').addClass('has-lightbox-active');
                $lightBox.addClass('is-visible');
                
                
            }
    }
    //Toggle landing page navigation
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
    
     /* Show/hide inner nav in smaller resolutions max-width 991px */
    function toggleSidebarNav(e) {
                e.preventDefault();
                var $thisHeading = $(this).parent('.sidebar-nav-toggle') ;
                if (!$thisHeading.hasClass('is-active')) {
                    $thisHeading.siblings('.sidebar-nav').slideDown(200, function() {
                        $thisHeading.addClass('is-active');
                    });    
                } else {
                    $thisHeading.siblings('.sidebar-nav').slideUp(200, function() {
                        $thisHeading.removeClass('is-active');
                    });    
                }

       
    }
    if ($(window).outerWidth() <= 1024) {
        toggleSidebarNav();
    }
    
    $(window).on('resize', function() {
        if ($(window).outerWidth() > 1024) {
            console.log('Greater than: '+$(window).outerWidth());
            $('.sidebar-nav:hidden').fadeIn(180);
            $('.sidebar-nav-toggle > a').off('click', toggleSidebarNav);
        } else {
            console.log('Less than: '+$(window).outerWidth());
            $('.sidebar-nav-toggle > a').on('click', toggleSidebarNav);
        }
    });
    
    
    $('.sidebar-nav li.has-dropdown > .sidebar-nav-toggle__icons').on('click', function(event) {
        event.preventDefault();
        $this = $(this);
        $thisLi = $this.parent('li');
        if ($thisLi.hasClass('is-active')) {
            $this.next('ul').slideUp(200, function() {
                $thisLi.removeClass('is-active');
            });    
        } else {
            $this.next('ul').slideDown(200, function() {
                $thisLi.addClass('is-active');
            });    
        }
        
    });
    
     /** By the numbers count up **/
     if ($('.by-the-numbers__number').length > 0) {
         $('.by-the-numbers__number').each(function() {
            var $thisCountUp = $(this).find('.by-the-numbers__count-up');
            console.log($thisCountUp.html());
            var targetNumber = Number.parseInt($thisCountUp.data('count-up-to'));
            console.log(targetNumber); 
            var numb = Number.parseInt($thisCountUp.html());
            
            function incrementNumber() {
                numb++;
                if (numb < targetNumber) {
                    numb++;
                    setTimeout(function() {
                        $thisCountUp.text(numb);
                        incrementNumber();
                    }, 2000/targetNumber);    
                } else {
                    return;
                }
            }
            incrementNumber();
         });
     }
    
    
     
    //Diversity .active class toggle 
    $('.feature-section.feature-section--fixed').find('.tab-column > a').on('click, focus', function(event) {
        event.preventDefault();
        console.log('click '+$(this).closest('.feature-section.feature-section--fixed').attr('class'));
        $(this).closest('.feature-section.feature-section--fixed').toggleClass('is-active');
    });
        
}());