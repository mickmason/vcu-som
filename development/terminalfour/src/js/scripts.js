// Add your custom JavaScripts to this file
!/* Build scripts */
(function() {
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
    $ajax.open('GET', '/vcu-school-of-medicine/style-assets/media/svg-icons/som-icons.svg', true);
    //$ajax.open('GET', '/style-assets/media/svg-icons/som-icons.svg', true); 
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
        prevArrow: '.slider-control__prev.news-slider__control',
        nextArrow: '.slider-control__next.news-slider__control',
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
        nextArrow: ' .video-gallery-feature .slider-control.slider-control__next',
        appendDots: '.video-gallery-feature .slick-dots-container',
        responsive: [
            {
                breakpoint: 787,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '30.9015%',
                    breakpoint: 1024
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
            prevArrow: '<button class="slider-control slider-control__prev discovery-slider__control discovery-slider__controls__prev "><span class="icon icon--svg has-icon-white"><svg class="svg-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#prev_arrow"></use></svg></span></button>',
            nextArrow: '<button class="slider-control slider-control__next discovery-slider__control discovery-slider__controls__next " ><span class="icon icon--svg has-icon-white"><svg class="svg-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next_arrow"></use</svg></span></button>',
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
     var alwaysMatchHeightArray = [
         '.card--flat.featured-programs-card .card-heading' 
     ];   
     var matchHeightArray = 
         [
             
             '.hero-body-quicklinks-container > .hero-body > .container, .hero-body-quicklinks-container .hero-quicklinks > .container', 
             '.hero-body__text',
             '.hero-body__text > p',
             '.card--flat.featured-programs-card .card-heading',
             '.card-columns > .column',
             '.card--flat .card-content',
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
            
            if ($thisItem.data('lightboxGallery') !== "" && $thisItem.data('lightboxGallery') !== undefined) {
                var galleryTitle = $thisItem.data('lightbox-gallery');
                var galleryItems = $('[data-lightbox-gallery="'+ galleryTitle + '"]');
            } else {
                var thisTitle = $thisItem.data('lightbox-title');
                var $lightBoxTitleH2 = $('<h2 />').append(thisTitle);
                var $lightBoxTitle = $('<div class="som-lightbox__title" />').append($lightBoxTitleH2);
                var thisCaption = $thisItem.data('lightbox-caption');
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
                } else if (thisMediaType === 'youtube-video') { 
                    $lightBoxMediaContents = $('<iframe />');
                    $lightBoxMediaContents.attr('height', '315');
                    $lightBoxMediaContents.attr('width', '560');
                    $lightBoxMediaContents.attr('src', 'https://www.youtube.com/embed/'+$thisItem.data('lightbox-youttubeid')+'?autoplay=1rel=0');
                } else if (thisMediaType === 'vimeo-video') { 
                    $lightBoxMediaContents = $('<iframe />');
                    $lightBoxMediaContents.attr('height', '268');
                    $lightBoxMediaContents.attr('width', '640');
                    $lightBoxMediaContents.attr('src', 'https://player.vimeo.com/video/'+$thisItem.data('lightbox-vimeoid')+'?autoplay=1rel=0');
                }

                var $lightBoxMedia = $('<div class="som-lightbox__media" />');
                if (thisMediaType === 'img') {
                  $lightBoxMedia.addClass('image is-16by9');  
                } else if (thisMediaType === 'youtube-video') {
                  $lightBoxMedia.addClass('video is-16by9');  
                } else if (thisMediaType === 'vimeo-video') {
                  $lightBoxMedia.addClass('video is-2by1');  
                }
                
                $lightBoxMedia.append($lightBoxMediaContents);
                var $lightBoxItem = $('<div class="som-lightbox-item" />');
                $lightBoxItem.append($lightBoxTitle).append($lightBoxMedia).append($lightboxCaption);

                $lightBox.find('.som-lightbox__player').empty().append($lightBoxItem);
                $('body').addClass('has-lightbox-active');
                $lightBox.addClass('is-visible');
            }
    }
    /* Hero video load and resize */
    function heroVideo() {
      $('.hero-video').each(function() {
        var ratio = 16/9;
        var heroContainer = $(this).closest('.hero--video');
        var video = $(this);
        var videoElement = $(this).children('video'); 
        if (heroContainer.hasClass('is-loaded') === false) { 
          if ((videoElement[0].canPlayType('video/mp4') == 'maybe' || videoElement[0].canPlayType('video/mp4') == 'probably') && videoElement[0].canPlayType('video/mp4') != 'no') {
            videoElement[0].addEventListener('error', function(error) {
              videoElement.css('display', 'none');
              heroContainer.css({backgroundImage: 'url('+heroContainer.data('videoBackground')+')'});   
            }, true);
            heroContainer.addClass('is-loaded');  
          } else {
            videoElement.css('display', 'none');
            heroContainer.css({backgroundImage: 'url('+heroContainer.data('videoBackground')+')'});   
          }
          video.css('width', '');
          var heroHeight = heroContainer.outerHeight();
          var videoHeight = video.outerHeight();
          if ( videoHeight < heroHeight ) {
            var newWidth = heroHeight * ratio;
            video.css({width: newWidth + 'px'});
          }
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
    $('.main-nav-toggle__mobile .navbar-link').on('mousedown focus', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        clearActiveNavs($(this));
        $(this).toggleClass('is-active');
        $('.main-navigation__menu').toggleClass('is-active');
    });
    //The secondary nav icon in mobile
    $('.secondary-nav-toggle--mobile > .navbar-link').on('mousedown focus', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        clearActiveNavs($(this));
        $(this).toggleClass('is-active');
        $('.secondary-nav--mobile__menu').toggleClass('is-active');
    });
    //Site search mobile, desktop
    $('.site-search-toggle--mobile > .navbar-link').on('mousedown focus', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        clearActiveNavs($(this));
        $(this).toggleClass('is-active');
        $('.site-search-form').toggleClass('is-active'); 
    }); 
    $('.main-navigation__search-toggle .navbar-link').on('mousedown focus', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        $(this).toggleClass('is-active');
        $('.site-search-form').toggleClass('is-active'); 
    });
    //Secondary nav mobile dropdowns
    $('.secondary-nav--mobile__link.has-dropdown').on('mousedown focus', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        $('.secondary-nav--mobile__menu .navbar-dropdown.is-active').not( $(this).siblings('.navbar-dropdown')).removeClass('is-active');
        $('.secondary-nav--mobile__link.has-dropdown.is-active').not($(this)).removeClass('is-active');
        $(this).toggleClass('is-active');
        $(this).siblings('.navbar-dropdown').toggleClass('is-active');     
    });
    //Main nav dropdowns mobile handler
    function addMainNavHandlers() {
        $('.main-navigation__menu .main-navigation__item.has-dropdown .navbar-link--main').off('mousedown focus focusout');
        if ($(window).outerWidth() < 1024) {
            $('.main-navigation__menu .main-navigation__item.has-dropdown .navbar-link--main').each(function(idx) {
                 $(this).on('mousedown focus', function(event) {
                     event.preventDefault();
                     event.stopImmediatePropagation();
                     $('.main-navigation__menu .navbar-dropdown.is-active').not($(this).siblings('.navbar-dropdown')).removeClass('is-active');
                     $('.navbar-link--main.is-active').not($(this)).removeClass('is-active');
                     ($(this).hasClass('is-active')) ? $(this).removeClass('is-active') : $(this).addClass('is-active');
                     ($(this).siblings('.navbar-dropdown').hasClass('is-active')) ? $(this).siblings('.navbar-dropdown').removeClass('is-active') : $(this).siblings('.navbar-dropdown').addClass('is-active'); 
                });
            });
        } else {
          /* $('.main-navigation__menu .main-navigation__item.has-dropdown').each(function(idx) {
                 $(this).on('focus', function(event) {
                     event.preventDefault();
                     event.stopImmediatePropagation();
                     $('.main-navigation__menu .navbar-dropdown.is-active').not($(this).find('.navbar-dropdown')).removeClass('is-active');
                     $('.navbar-link--main.is-active').not($(this).children('.navbar-link')).removeClass('is-active');
                     ($(this).children('.navbar-link').hasClass('is-active')) ? $(this).children('.navbar-link').removeClass('is-active') : $(this).children('.navbar-link').addClass('is-active');
                     ($(this).children('.navbar-dropdown').hasClass('is-active')) ? $(this).children('.navbar-dropdown').removeClass('is-active') : $(this).children('.navbar-dropdown').addClass('is-active'); 
                });
            });*/
          $('.navbar-link.navbar-link--main').on('focus', function() {
            var $dropdown = $(this).next('.navbar-dropdown');
            var $lastLink = $dropdown.find('a');
            $dropdown.addClass('is-active');
            $lastLink = $lastLink.eq($lastLink.length - 1);
            $lastLink.on('focusout', function() {
              $dropdown.removeClass('is-active');
            });
          });
          $('.navbar-link.navbar-link--main').hover(function() {
            console.log('hover');
            var $lastLink = $dropdown.find('a');
            $dropdown.addClass('is-active');
            var $dropdown = $(this).next('.navbar-dropdown');
            $dropdown.addClass('is-active');
          }, function() {
            var $lastLink = $dropdown.find('a');
            $dropdown.removeClass('is-active');
            var $dropdown = $(this).next('.navbar-dropdown');
            $dropdown.removeClass('is-active');
          });
        }
     } 
     addMainNavHandlers();
     $(window).on('resize', addMainNavHandlers);
    /* Add classes to single column dropdowns in Main nav */
    var $navItems = $('.main-navigation__item'), navItemsCount = $('.main-navigation__item').length; 
    var isOdd = false;
    var middleNumber = Math.floor(navItemsCount/2);
    $navItems.each(function(idx, el) {
        $thisNavItem = $(el);
        if (navItemsCount % 2 === 0) {
            //even number
            if (idx === middleNumber - 1 || idx === middleNumber) {
                $thisNavItem.addClass('main-navigation__item--middle');
            } else if (idx < middleNumber -1) {
                $thisNavItem.addClass('main-navigation__item--left');
            } else {
                $thisNavItem.addClass('main-navigation__item--right');
            } 
        } else {
            //odd number
            if (idx === middleNumber) {
                $thisNavItem.addClass('main-navigation__item--middle');
            } else if (idx < middleNumber) {
                $thisNavItem.addClass('main-navigation__item--left');
            } else {
                $thisNavItem.addClass('main-navigation__item--right');
            } 
        }
    });
    $('.sidebar-nav li').each(function(idx, ele) {
      var $thisLi = $(ele);
      if ($thisLi.children('ul').length > 0) {
        $thisLi.addClass('has-dropdown');
        $thisLi.children('a').after('<a href="javascript:void(0)" class="icon icon--svg sidebar-nav-toggle__icons" title="View next level links"><svg class="show-more-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#plus_icon"></use></svg><svg class="show-less-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#minus_icon"></use></svg></a> ');
      }
    });
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
         $('.sidebar-nav-toggle > a').off('mousedown focus', toggleSidebarNav);
    } else {
        $('.sidebar-nav-toggle > a').on('mousedown focus', toggleSidebarNav);
    }
    
    $(window).on('resize', function() {
        if ($(window).outerWidth() > 1024) {
            $('.sidebar-nav:hidden').fadeIn(180);
            $('.sidebar-nav-toggle > a').off('mousedown focus', toggleSidebarNav);
        } else {
            $('.sidebar-nav-toggle > a').on('mousedown focus', toggleSidebarNav);
        }
    });
    $(document).on('mousedown focus', '.sidebar-nav li.has-dropdown > .sidebar-nav-toggle__icons', function(event) {
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
        var thisTarget = $($this.attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisTarget}, 300);
        return false;
    });
    
    //.feature-section
    $('.hero-foot a.svg-icon-wrap').on('click', function(eve) {
        eve.preventDefault();
        var $this = $(this);
        try {
           
           if ($($this.attr('href')).offset() != undefined || $($this.attr('href')).offset() != null) {
                var thisTarget = $($this.attr('href')).offset().top; 
                $('html, body').animate({scrollTop: thisTarget}, 300);    
           } else {
                var thisTarget = $($this.closest('.hero').next('.section')).offset().top; 
                $('html, body').animate({scrollTop: thisTarget}, 300);       
           }
            
        } catch (err) {
            console.error('Hero scroll function error: '+ err);
            console.info('Stack: '+ err.stack);
        }
        return false;
    });
    /* Program info cards */

    var $programInfoCards = $('.program-info-card'), $programInfoCardButtons = $('.program-info-card__button'), $programInfoCardCards = $('.program-info-card__card');
    $('.program-info-card__card:odd').addClass('program-info-card__card--right');
    $programInfoCardButtons.on('click', function(event) {
           event.preventDefault();
           var $this = $(this);
           var target = $this.data('program');
           if ($this.hasClass('is-visible')) {
               $this.removeClass('is-visible');
               $programInfoCardCards.each(function(idx, el) {
                    if ($(this).hasClass('is-visible')) {
                        $(this).removeClass('is-visible')
                    }
               });
           } else {
               $programInfoCardCards.removeClass('is-visible');
               $programInfoCardCards.each(function(idx, el) {
                    if ($(this).data('program') === target) {
                        $(this).addClass('is-visible')
                    }
               });
               $this.addClass('is-visible');
           }
    });
    if ($(window).outerWidth() >= 768 && $('.programs-block').length > 0 && $('.programs-block').hasClass('programs-block--cloned') !== true ) {
        var $programInfoCardsEven = $('.program-info-card__card--column:even');
        var $programInfoCardsOdd = $('.program-info-card:odd');
        $('.program-info-card:odd').each(function(idx, el) {
            var $thisCard = $(el);
            $thisCard.after($programInfoCardsEven[idx]);
        });
        $('.programs-block').addClass('programs-block--cloned');
    }
    $(window).on('resize', function() {
        if ($(window).outerWidth() >= 768 && $('.programs-block').length > 0 && $('.programs-block').hasClass('programs-block--cloned') !== true) {
            var $programInfoCardsEven = $('.program-info-card__card--column:even');
            var $programInfoCardsOdd = $('.program-info-card:odd');
            $('.program-info-card:odd').each(function(idx, el) {
                var $thisCard = $(el);
                $thisCard.after($programInfoCardsEven[idx]);
            });
            $('.programs-block').addClass('programs-block--cloned');
        } else {
            
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
    
    /* Skip links target */
    $('.hero, .section:not(.main-site-header)').eq(0).attr('id', 'content-start');
    
    /* Diversity fixed element */
    function fixFixedFeature(featureRightValue) {
        var $fixedFeature = $('.feature-section.feature-section--fixed');
        var featureLeftPadding = parseInt($fixedFeature.find('.feature-section--fixed__text-container').css('paddingLeft'));
        if (featureRightValue === undefined) {
            if ($fixedFeature.css('position') === 'absolute') {
                var featureRightValue = - ($fixedFeature.outerWidth() - (featureLeftPadding / 2) - 8) / ($('.body-wrap').outerWidth()) * 100; 
                var offsetTop = $fixedFeature.offset().top;
                $(window).on('scroll', function() {
                    
                    
                });
            } else {
                var featureRightValue = - ((($fixedFeature.outerWidth() - (featureLeftPadding / 2) - 8) / $('.body-wrap')) * 100) + (($('.body-wrap').offset().left / $(document).outerWidth()) * 100); 

            }
            $fixedFeature.css({right: featureRightValue + '%'});
        } else {
            $fixedFeature.css({right: featureRightValue});    
        }
        
    }
    if ($('.feature-section.feature-section--fixed').length > 0) {
        fixFixedFeature();    
        $(window).on('resize', function() {
                fixFixedFeature();    
        });
    }
    //Responsive videos in general content
    $('.main-content .general-content iframe').each(function(idx, ele) {
        var $this = $(ele);
        if ($this.parents('.fulltext-video').length < 1) {
            $this.wrap('<div class="fulltext-video video is-16by9"></div>');
        }
    });
  
  //VCU Scripts imported from old build
  /* Search related */
  function checkQuery() {
     var queryFld = document.keyword.query;
     if (queryFld.value == "") {
       alert ("Please enter a term to search");
       queryFld.focus();
       return(false);
       }
     return(true);
     }

  function checkName() {
     var nameFld = document.ccso.NAME;
     if (nameFld.value == "") {
       alert ("Please enter a name");
       nameFld.focus();
       return(false);
       }
     return(true);
     }

  function convertString( temp ) {
     var newString = "";
     var i=0;
     for( i=0; i < temp.length; i++ ) {
       if( temp.charAt(i) != " " ) {
         newString += temp.charAt(i);
         }
       else {
         newString += "+";
         }
       }
     return newString;
  }
  $('#som-site-earch-form').on('submit', function(event) {
    event.preventDefault();
    if( document.keyword.searchnav[0].checked ) {
      if( checkQuery() ) {
      var header = "http://search.vcu.edu/search?";
      var options = "&access=p&proxystylesheet=default_frontend";
      var searchVal = "q=" + convertString(document.keyword.query.value);
      //eval( "location = " + "\"" + header + searchVal + options + "\"");
      window.location.href = header + searchVal + options;
      }
    }

          //people
    if( document.keyword.searchnav[1].checked ) {
       if( checkQuery() ) {
         var header = "http://phonebook.vcu.edu?";
         options = "TYPE=All";
         searchVal = "&NAME=" + convertString(document.keyword.query.value);
         window.location.href = header + options + searchVal;
      }
    }
    //Medschool via Google
    if( document.keyword.searchnav[2].checked ) {
      if( checkQuery() ) {
        var header = "http://search.vcu.edu/search?";
        var options = "&access=p&site=somweb&proxystylesheet=default_frontend";
        var searchVal = "q=" + convertString(document.keyword.query.value);
        window.location.href = header + searchVal + options;
      }
    } 
  });
  $('.secondary-nav__navbar .navbar-item.has-dropdown > a').on('focus', function() {
    
  });
  //* Main and secondary navigation 
  $('.secondary-nav__navbar .navbar-item.has-dropdown > a').on('focus', function() {
    var $dropdown = $(this).next('.navbar-dropdown');
    console.log($dropdown);
    var $lastLink = $dropdown.find('a');
    $dropdown.addClass('is-active');
    $lastLink = $lastLink.eq($lastLink.length - 1);
    $lastLink.on('focusout', function() {
      $dropdown.removeClass('is-active');
    });
  })
 /* $('.navbar-link.navbar-link--main').on('focus', function() {
    var $dropdown = $(this).next('.navbar-dropdown');
    var $lastLink = $dropdown.find('a');
    $dropdown.addClass('is-active');
    $lastLink = $lastLink.eq($lastLink.length - 1);
    $lastLink.on('focusout', function() {
      $dropdown.removeClass('is-active');
    });
    
    
  });*/
  
  
}());