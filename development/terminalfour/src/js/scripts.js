// Add your custom JavaScripts to this file
!/* Build scripts */
(function() {
    var myVar = 'Michael'; 
    
    /*
     * Detect SVG support
     */
    function supportsSvg() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
    }
    /*
    * Load SVG via AJAX
    */
    var $ajax = new XMLHttpRequest();
    $ajax.open('GET', '/style-assets/media/svg-icons/som-icons.svg', true);
    $ajax.onreadystatechange = loadSVGs;
    $ajax.send();
    
    function loadSVGs() { 
      if ($ajax.readyState === 4) {
          if ($ajax.status === 200) {
            var responseContentType = $ajax.getResponseHeader("Content-Type"); 
            if (responseContentType.indexOf('image/svg+xml') !== -1) {
                var div = document.createElement("div");
                div.setAttribute('class', 'vcu-som-icons-stack');
                div.innerHTML = $ajax.responseText;
                document.body.insertBefore(div, document.body.childNodes[0]);    
            } else {
                $('body').addClass('no-svg');
            }
          } else {
            console.log('Load SVG HTTP status is: '+$ajax.status);
          }
      }
    }
    /** 
      ** Plugins
    **/
    /** Slick instances **/
    $('.hero-slider__slider').slick({ 
        mobileFirst: true,
        slidesToShow: 1,
        speed: 400,
        slide: '.hero-slider__slide',
        prevArrow: '.hero-slider__controls__prev', 
        nextArrow: '.hero-slider__controls__next', 
        appendArrows: '.slider__controls',
        appendDots: '.slick-dots-container' 
    });
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
    }); 
    $('.discovery-slider__slider').each(function(idx, el) {
        var $this = $(el);
        $this.slick({
            mobileFirst: true,
            slidesToShow: 1,
            slide: '.discovery-slider__slide',
            appendArrows: $this.find('.discovery-slider__controls'),
            prevArrow: '<button class="slider-control slider-control__prev discovery-slider__control discovery-slider__controls__prev "><span class="icon icon--svg has-icon-white"><svg class="svg-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="style-assets/media/svg-icons/som-icons.svg#prev_arrow"></use></svg></span></button>',
            nextArrow: '<button class="slider-control slider-control__next discovery-slider__control discovery-slider__controls__next " ><span class="icon icon--svg has-icon-white"><svg class="svg-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="style-assets/media/svg-icons/som-icons.svg#next_arrow"></use</svg></span></button>',
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
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                }
            ]
        });
    });
       
    
    $('.video-slider-card.slick-slide').not('.slick-current').on('click', function(event) {
        event.preventDefault();
        console.log('click '+$(this).data('slick-index'));        
        $('.gallery-feature__slider').slick('slickGoTo', parseInt($(this).data('slick-index')));
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
    
     /*! 
     * jQuery Match Height https://github.com/liabru/jquery-match-height
     */
     var matchHeightArray = 
         [
             '.discovery-slider .discovery-slider__slide',
             '.card--flat'
         ];
    
     if ($(window).outerWidth() > 768) {
         matchHeightArray.forEach(function($this, idx, arr) { 
             $($this).matchHeight({byRow: true});    
         });    
     }
     $(window).on('resize', function() {
         if ($(window).outerWidth() >=767) {
             matchHeightArray.forEach(function($this, idx, arr) { 
                 $($this).matchHeight();    
             });
         } else {
             matchHeightArray.forEach(function($this, idx, arr) { 
                 $($this).css('height', 'auto');    
             });                         
         }
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
    /* Hero video resizer */
    function heroVideo() {
      $('.hero-video').each(function() {
        var ratio = 16/9;
        var heroContainer = $(this).closest('.hero--video');
        var video = $(this);
        video.css('width', '');
        var heroHeight = heroContainer.outerHeight();
        var videoHeight = video.outerHeight();
        if ( videoHeight < heroHeight ) {
          var newWidth = heroHeight * ratio;
          video.css({width: newWidth + 'px'});
        }
      });
    }
    heroVideo();
    $(window).on('resize', function() {
      heroVideo();
    });
    
    //Toggle landing page navigation
    var $landingNav       = $('.landing-page-navigation');
    var $landingNavToggle = $('.landing-page-nav__toggle');
    $landingNavToggle.on('click', function(event) {
        event.preventDefault();
        $('.landing-page-nav__body-wrap').slideToggle(240, function() {
            $landingNav.toggleClass('is-active');
        });
    }).off('click');
    var $audienceNav      = $('.audience-navigation');
    var $audienceNavToggle= $('.audience-nav__toggle'); 
    $audienceNavToggle.on('click', function(event) {
        event.preventDefault();
        $('.audience-navigation__body-wrap').slideToggle(240, function() {
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
    function toggleSidebarNav() {
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
    if ($(window).outerWidth() > 1024) {
         $('.sidebar-nav-toggle > a').off('click', toggleSidebarNav);
    } else {
        $('.sidebar-nav-toggle > a').on('click', toggleSidebarNav);
    }
    
    $(window).on('resize', function() {
        if ($(window).outerWidth() > 1024) {
            $('.sidebar-nav:hidden').fadeIn(180);
            $('.sidebar-nav-toggle > a').off('click', toggleSidebarNav);
        } else {
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
    var countUpIsDone = false;
    if ($('.by-the-numbers-feature').length > 0) {
        $('.by-the-numbers-feature').each(function(idx, el) {
            var $thisFeature = $(el);
            $(window).on('scroll', function() {
                if ($(el).attr('counted-up') !== 'true') {
                    var $byTheNumbersCols = $thisFeature.find('.by-the-numbers__columns');
                    var byTheNumbersTop = $byTheNumbersCols.offset().top;
                    var byTheNumbersBottom = byTheNumbersTop + $byTheNumbersCols.outerHeight();
                    var viewportTop = $(window).scrollTop();
                    var viewportBottom = viewportTop + $(window).height();
                    if (byTheNumbersBottom > viewportTop && byTheNumbersTop < viewportBottom) {
                        byTheNumbersCountUp($byTheNumbersCols);   
                    } 
                }
            });                
        });
    }
    function byTheNumbersCountUp($numbersCols) {
        $numbersCols.find('.by-the-numbers-card').each(function(idx, el) {
            var $thisCountUp = $(el).find('.by-the-numbers__count-up');
            var targetNumber = parseInt($thisCountUp.data('count-up-to'));
            var numb = parseInt($thisCountUp.html());
            function incrementNumber() {
                numb++;
                if (numb < targetNumber) {
                    numb++;
                    setTimeout(function() {
                        $thisCountUp.text(numb);
                        incrementNumber();
                    }, 3000/targetNumber);    
                } else {
                    $(this).closest('.by-the-numbers-feature').attr('counted-up', 'true');
                    return;
                }
            }
            setTimeout(function() {
                incrementNumber();        
            }, 500);
        }) ;
        
        
    } 

    //Diversity .active class toggle 
    $('.feature-section.feature-section--fixed').find('.feature-section--fixed__toggle').on('click', function(event) {

        event.preventDefault();
        $(this).closest('.feature-section.feature-section--fixed').toggleClass('is-active');
    });
    $('.feature-section.feature-section--fixed').find('.feature-section--fixed__hide').on('click', function(event) {
        console.log('click');
        event.preventDefault();
        if ($(this).closest('.feature-section.feature-section--fixed').hasClass('is-hidden') === false) {
           $(this).closest('.feature-section.feature-section--fixed').fadeOut(300, function() {
            $(this).addClass('is-hidden');
           });
        }
    });
    /* Landing and inner page nav scrolls */
    $('.inner-page-nav__item > a, .landing-page-navigation__link').on('click', function(event) {
        event.preventDefault();
        var $this = $(this);
        console.log($this.attr('href'));
        var thisTarget = $($this.attr('href')).offset().top;
        console.log(thisTarget);
        $('html, body').animate({scrollTop: thisTarget}, 300);
        return false;
    });
    
    /* Program info cards */

    var $programInfoCards = $('.program-info-card__card');
    if ($(window).outerWidth() > 768) {
        $('.program-info-card').each(function(idx, el) {
            if (idx%2 !== 0) {
              $(el).addClass('is-right');   
            }
        });
    }
    $(window).on('resize', function() {
        if ($(window).outerWidth() > 768) {
            $('.program-info-card').each(function(idx, el) {
                if (idx%2 !== 0) {
                  $(el).addClass('is-right');   
                }
            });
        }
    });
    $('.program-info-card__button').on('click', function(e) {
        e.preventDefault(); 
        var $thisInfoCard = $(this).siblings('.columns');
        if ($thisInfoCard.hasClass('is-visible')) { 
             $thisInfoCard.removeClass('is-visible').outerWidth( parseInt($(this).css('width')));  
        } else { 
            $programInfoCards.removeClass('is-visible');
            $thisInfoCard.addClass('is-visible').outerWidth( $(this).closest('.columns').outerWidth()-parseInt($(this).closest('.column').css('paddingLeft'))*2);  
        }
        
    });
    /** 
      * VCU Plugin Accordion panel
      * http://katmai.staging.vcu.edu/plugins/accordion-panel/
    **/
    $('.plugin-accordion-heading').on('click', function(event) {
        event.preventDefault();
        var $thisPanel = $(this).closest('.plugin-accordion-panel ');
        if ($thisPanel.hasClass('expand')) {
            $thisPanel.removeClass('expand');
        } else {
            $('.plugin-accordion-panel.expand').removeClass('expand');
            $thisPanel.addClass('expand');
        }
    });
    /** Site exit survey **/
   /* $(document).on('click', '.t4-exit-survey__no', function(e) {
        e.preventDefault();
        Cookies.set('t4WillTakeSurvey', false, {expires: 3});
        $('.t4-exit-survey').removeClass('is-visible');
    });
    $(document).on('click', '.t4-exit-survey__yes', function(e) {
        e.preventDefault();
        Cookies.set('t4WillTakeSurvey', false, {expires: 3});
        window.location.href = 'https://www.surveymonkey.com/r/PXXG239';
    });*/
    
    /*if (Cookies.get('t4WillTakeSurvey') === undefined) {
        console.log(Cookies.get('t4WillTakeSurvey'));
        Cookies.set('t4WillTakeSurvey', true, {expires: 3});
        var timeOut = new Date();
        timeOut.setUTCMinutes(timeOut.getUTCMinutes()+2);
        console.log(timeOut);
        Cookies.set('t4SurveyTimeOut', timeOut, {expires: 3});
        setTimeout(showSurvey, 1000*60*2);
    } else if (Cookies.get('t4WillTakeSurvey') === 'true') {
        
        
        if (parseInt(new Date(Cookies.get('t4SurveyTimeOut')).getUTCMinutes() - new Date().getUTCMinutes()) <= 0) {
            console.log('show survey');
            showSurvey();
        } else {
            console.log('show survey set time out '+parseInt(new Date(Cookies.get('t4SurveyTimeOut')).getUTCMinutes() - new Date().getUTCMinutes())*1000*60);
            setTimeout(showSurvey, parseInt(new Date(Cookies.get('t4SurveyTimeOut')).getUTCMinutes() - new Date().getUTCMinutes())*1000*60);          
        }
        
    } else {
      console.log(Cookies.get('t4WillTakeSurvey'));
    }
    function showSurvey() {
        if (Cookies.get('t4WillTakeSurvey') === 'true') {
            $('.t4-exit-survey').addClass('is-visible');
            return;
        }
    }*/
}());