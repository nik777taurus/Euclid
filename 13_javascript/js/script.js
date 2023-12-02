// slider

let swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
  spaceBetween: 30,
})

// tabs

let tabsBtn = document.querySelectorAll('.our-work__link');
let tabsItem = document.querySelectorAll('.our-work__work-conteiner');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('our-work__link--active') });
    e.currentTarget.classList.add('our-work__link--active');

    tabsItem.forEach(function (element) { element.classList.remove('our-work__work-conteiner--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('our-work__work-conteiner--active');
  });
});

// spoiler

new Accordion('.accordion-list', {
  elementClass: 'list__item',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
});

// burger

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__list');
let menuLinks = menu.querySelectorAll('.header__link');
let slider = document.querySelector('.hero__slide');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('header__burger--active');

    menu.classList.toggle('header__list--active');

    document.body.classList.toggle('stop-scroll');

    slider.classList.toggle('hero__slide--active');
  }
)

menuLinks.forEach(
  function (el) {
    el.addEventListener('click',
      function () {
        burger.classList.remove('header__burger--active');

        menu.classList.remove('header__list--active');

        document.body.classList.remove('stop-scroll');
      }
    )
  }
)

// search

let searchOpen = document.querySelector('.header__search');
let searchPanel = document.querySelector('.search__panel');
let searchClose = document.querySelector('.search__close');

searchOpen.addEventListener('click',
  function () {
    searchPanel.classList.toggle('search__panel--active');

    document.body.classList.toggle('stop-scroll');
  }
)

searchClose.addEventListener('click',
  function () {
    searchOpen.classList.remove('header__search--active');

    searchPanel.classList.remove('search__panel--active');

    document.body.classList.remove('stop-scroll');
  }
)
