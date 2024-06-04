// ABOUT SLIDER

const swiperAbout = new Swiper('.swiper__about', {

    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    // allowTouchMove: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },

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

// THEME SWITCHER

function initialTheme (themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;   
    const darkModeIcon = document.querySelector('.mode__dark'); 
    const lightModeIcon = document.querySelector('.mode__light')
    if (themeName == 'light-mode') {
        darkModeIcon.classList.add('mode--hidden');
        lightModeIcon.classList.remove('mode--hidden');
    } else {
        darkModeIcon.classList.remove('mode--hidden');
        lightModeIcon.classList.add('mode--hidden');
    } 
}

function switchMode() {
    if (localStorage.getItem('theme') == 'dark-mode') {
        initialTheme('light-mode');
    } else {
        initialTheme('dark-mode');
    }
}  

const modeButton = document.querySelector('.header__mode');
modeButton.addEventListener('click', switchMode);

window.addEventListener('DOMContentLoaded', () => {
    initialTheme(localStorage.getItem('theme'));
});