$(document).ready(function () {
    $('div.favorites-tabs__caption').on('click', 'button:not(.favorites-tabs__tab_active)', function () {
        $(this)
            .addClass('favorites-tabs__tab_active').siblings().removeClass('favorites-tabs__tab_active')
            .closest('div.favorites-tabs').find('div.favorites-tabs__content').removeClass('favorites-tabs__content_active').eq($(this).index()).addClass('favorites-tabs__content_active');
    });

    $('.slider').slick({
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        speed: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]

    });


    var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,

        },
        loop: true

    });
    $('.burger').on('click', function () {
        $('.burger').toggleClass('active')
        $('.header__burger').toggleClass('active')
    });

});