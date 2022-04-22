// Стили
import 'normalize.css';
import './styles/main.scss';

// Свайпер
const swiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
    loop: true,
    loopedSlides: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }   
});

// Бургер-меню
let open_menu = document.querySelector('.hamburger')
let hamburger = document.querySelector('.hamburger-menu')
let close_menu = document.querySelector('.hamburger-menu__burger')

open_menu.addEventListener('click', function () {
    hamburger.classList.add('visible')
})

close_menu.addEventListener('click', function () {
    hamburger.classList.remove('visible')
})

// Окно обратной связи
let open_feedback = document.querySelector('.header__chat')
let feedback = document.querySelector('.feedback')
let close_feedback = document.querySelector('.feedback__close')

open_feedback.addEventListener('click', function () {
    feedback.classList.add('visible')
})

close_feedback.addEventListener('click', function () {
    feedback.classList.remove('visible')
})

// Окно "Заказать звонок"
let open_callback = document.querySelector('.header__phone')
let callback = document.querySelector('.callback')
let close_callback = document.querySelector('.callback__close')

open_callback.addEventListener('click', function () {
    callback.classList.add('visible')
})

close_callback.addEventListener('click', function () {
    callback.classList.remove('visible')
})
