$('.slider-block__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false,
                // arrows: true
            }
        }
    ]
});

// $('.menu__btn').on('click', function() {
//     $('.header__top-inner').toggleClass('header__top-inner--active')
// })

document.getElementById().addEventListerner