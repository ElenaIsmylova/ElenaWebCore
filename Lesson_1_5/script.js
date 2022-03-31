const swiper = new Swiper('.swiper', {
    slidesPerView: 1.4,
    loop: true,
    loopedSlides: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }   
});

let logo_img = [
    "img/brend_logo_1.svg",
    "img/brend_logo_2.svg",
    "img/brend_logo_3.svg",
    "img/brend_logo_4.svg",
    "img/brend_logo_5.svg",
    "img/brend_logo_6.svg",
    "img/brend_logo_7.svg",
    "img/brend_logo_8.svg",
    "img/brend_logo_9.svg",
    "img/brend_logo_10.svg",
    "img/brend_logo_11.svg"
];

// Функция создаёт элементы с рекламой и помещает часть из них в видимый список, а часть внутрь тега details
function addListItems(number) {

    for (let i = 0; i < number; i++) {
        let clonedListItem = listItem.cloneNode(true);
        itemImg = clonedListItem.querySelector('.advertisement__brend-logo');
        itemImg.src = logo_img[i];
        list.appendChild(clonedListItem);
    }

    list.appendChild(listDetails);

    for (let i = number; i < logo_img.length; i++) {
        let clonedListItem = listItem.cloneNode(true);
        itemImg = clonedListItem.querySelector('.advertisement__brend-logo');
        itemImg.src = logo_img[i];
        listDetails.appendChild(clonedListItem);
    }
}

// Функция создаёт элементы с рекламой и помещает в слайдер
function addSwiperSlides() {
    for (let i = 0; i < logo_img.length; i++) {
        let clonedSwiperItem = swiperItem.cloneNode(true);
        itemImg = clonedSwiperItem.querySelector('.advertisement__brend-logo');
        itemImg.src = logo_img[i];
        swiperWrapper.appendChild(clonedSwiperItem);
    }
}

/* Функция, которая передаёт вызываемой функции, сколько рекламных элементов помещать в видимый список, а сколько - в тег details */
function determineNumberOfElements () {
    if (window.innerWidth >= 1120) { 
        addListItems(8);
    } else if (window.innerWidth < 1120 && window.innerWidth >= 768) {
        addListItems(6);
    } else {
        addSwiperSlides();
    }
}

// Создаем рекламные элементы, которые будут помещены в список
let list = document.querySelector('.advertisement__list');
let liContent = document.querySelector('#li-template').content;
let listItem = liContent.querySelector('.advertisement__item');

// Создаем рекламные элементы, которые будут помещены в тег details
let detailsContent = document.querySelector('#details-template').content;
let listDetails = detailsContent.querySelector('.details');

// Создаем рекламные элементы, которые будут помещены в слайдер
let swiperWrapper = document.querySelector('.swiper-wrapper');
let swiperContent = document.querySelector('#swiper-template').content;
let swiperItem = swiperContent.querySelector('.swiper-slide');

determineNumberOfElements();
