$(document).ready(function(){
    
    // menu responsive
    $('[data-target]').on('click', function(){
        var target = $(this).data("target");
        if($(this).hasClass('hamburger') || $(this).hasClass('overlay')) {
            $(target).toggleClass('active').siblings('.overlay').toggleClass('active');
        }
        else if ($(this).hasClass('lang__active')) {
            $(this).toggleClass('active');
        }
        else {
            $(this).toggleClass('active').siblings(target).slideToggle();
        }
        if($(this).hasClass('search-icon')) {
            $('#search-mobile').focus();
        }
        
    });
    
    // anim scroll
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });


    // carousel
    var swiper = new Swiper('.swiper-container--intro', {
        slidesPerView: 1,
        simulateTouch: false,
        spaceBetween: 0,
        effect: 'fade',
        pagination: {
            el: '#disc-intro, #disc-num',
            clickable: true,
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.intro__picture').hide(0);
                $('.intro__picture').removeClass('aos-init').removeClass('aos-animate');
            },
            slideChangeTransitionEnd: function () {
                $('.intro__picture').show(0);
                AOS.init();
            },
        },
        keyboard: false,
    });
    mySwiper = new Swiper('.swiper-container--sale', {
        slidesPerView: 3,
        simulateTouch: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        centeredSlides: true,
        cssMode: false,
        loop: true,
        navigation: {
        nextEl: '',
        prevEl: '',
    },
        pagination: {
        el: '#disc-sale',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            1229: {
                slidesPerView: 3,
            }
        }
    });
    mySwiper = new Swiper('.swiper-container--news', {
        slidesPerView: 3,
        simulateTouch: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        centeredSlides: false,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '',
        prevEl: '',
    },
        pagination: {
        el: '#disc-news',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1230: {
                slidesPerView: 3,
            }
        }
    });
    mySwiper = new Swiper('.swiper-container--videos', {
        slidesPerView: 'auto',
        autoHeight: true,
        simulateTouch: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-videos',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            991: {
                slidesPerView: 3,
            },
            1229: {
                slidesPerView: 4,
            },
        }
    });

    // AOS aniamte

    $(function () {
        AOS.init();
    });
    (function() {
      'use strict';

      // breakpoint where swiper will be destroyed
      // and switches to a dual-column layout
      const breakpoint = window.matchMedia( '(min-width: 992px)' );

      // keep track of swiper instances to destroy later
      let mySwiper;

      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////

      const breakpointChecker = function() {

        // if larger viewport and multi-row layout needed
        if ( breakpoint.matches === true ) {

          // clean up old instances and inline styles when available
          if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

          // or/and do nothing
          return;

          // else if a small viewport and single column layout needed
          } else if ( breakpoint.matches === false ) {

            // fire small viewport version of swiper
            return enableSwiper();

          }

      };

      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////

      const enableSwiper = function() {
          
        mySwiper = new Swiper('.swiper-container--horse', {
            slidesPerView: 'auto',
            autoHeight: true,
            simulateTouch: false,
            watchOverflow: true,
            watchSlidesVisibility: true,
            cssMode: false,
            loop: false,
            navigation: {
            nextEl: '',
            prevEl: '',
        },
            pagination: {
            el: '#disc-horse',
            clickable: true,
        },
            mousewheel: {
            forceToAxis: true,
        },
            touchReleaseOnEdges: true,
            keyboard: false,
            breakpoints: {
                991: {
                    slidesPerView: 4,
                },
                1229: {
                    slidesPerView: 5,
                },
            }
        });

      };

      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////

      // keep an eye on viewport size changes
      breakpoint.addListener(breakpointChecker);

      // kickstart
      breakpointChecker();



    })(); /* IIFE end */
});