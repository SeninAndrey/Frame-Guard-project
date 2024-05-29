// ABOUT SLIDER

const swiperAbout = new Swiper('.swiper__about', {
    slidesPerView: 3,
    spaceBetween: 20,

    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    // allowTouchMove: false,
});

// PROJECTS SLIDER

const swiperProjects = new Swiper('.swiper__projects', {
    slidesPerView: 5,
    spaceBetween: 0,
    speed: 20000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
});

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 50);
});