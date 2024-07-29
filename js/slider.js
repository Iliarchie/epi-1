const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 16,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        580: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1080: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
    },
});