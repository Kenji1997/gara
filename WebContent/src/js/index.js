// "use strict";

// var configDatePicker = {
//     enableTime: true,
//     "plugins": [new confirmDatePlugin({})]
// }

// $(document).ready(function () {
//     // slide init
//     var bannerSwiper = new Swiper('.swiper-banner', {
//         loop: true
//     });
//     var longtripSwiper = new Swiper('.swiper-longtrip', {
//         slidesPerView: 3,
//         spaceBetween: 10,
//         loop: true,
//         navigation: {
//             nextEl: '.longtrip-button-next',
//             prevEl: '.longtrip-button-prev',
//         },
//     });

//     // date picker
//     flatpickr("#datePicker-01", configDatePicker);

//     // menu effect
//     $("#trigger-menu-mobile").on('click', function (e) {
//         $(".menu-01__wrapper").toggleClass('show');
//         $(this).toggleClass('active');
//     });

//     $('.has-sub-menu').on('click', function() {
//         if (window.innerWidth < 1200) {
//             $(this).toggleClass('show')
//         }
//     })

//     //header effect
//     if ($('.headerEffect')) {
//         $(window).on('scroll', function (e) {
//             if ($(window).scrollTop() === 0) {
//                 return $('.headerEffect').removeClass('highlight')
//             }

//             $('.headerEffect').addClass('highlight')
//         })
//     }

//     //main form effect
//     $('.taxiType .item').on('click', function (e) {
//         $('#mainForm .taxiType .item').removeClass('active')
//         // });
//         $(this).addClass('active')
//     })

//     // counting effect
//     $('.counting [data-count]').each(function () {
//         var $this = $(this),
//             countTo = $this.attr('data-count');

//         $({ countNum: $(this).text() }).animate(
//             {
//                 countNum: countTo
//             },
//             {

//                 duration: 6000,
//                 easing: 'linear',
//                 step: function () {
//                     $this.text(Math.floor(this.countNum));
//                 },
//                 complete: function () {
//                     $this.text(this.countNum);
//                 }

//             }
//         );
//     });
// });

// $(document).on('click', function (e) {

//     // if (!trigger.is(event.target) && !mainMenuWrapper.is(event.target) && mainMenuWrapper.has(event.target).length === 0) {
//     //     mainMenuWrapper.removeClass('show');
//     // }

//     if (!$('#trigger-menu-mobile').is(e.target) && !$('#trigger-menu-mobile').has(e.target).length && !$('.menu-wrapper').has(e.target).length) {
//         $(".menu-01__wrapper").removeClass('show');
//         $('#trigger-menu-mobile').removeClass('active');
//     }
// })