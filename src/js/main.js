jQuery(function () {
    // main slider
    const promoCarousel = new Swiper('.js-promo-slider', {
        loop: true,
        // Navigation arrows
        // navigation: {
        // nextEl: ".swiper-button-next",
        // prevEl: ".swiper-button-prev",
        // },
        navigation: true,
    });

    // main page blog slider
    const postsCarousel = new Swiper('.js-posts-slider', {
        loop: true,
        slidesPerView: 3,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Navigation arrows
        // navigation: {
        // nextEl: ".swiper-button-next",
        // prevEl: ".swiper-button-prev",
        // },
        navigation: true,
    });
});