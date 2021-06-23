// фон сетки
if (document.querySelector('.grid')) {
  document.querySelectorAll('.grid').forEach(box => {
    for (let i = 9; i > 0; i--) {
      box.insertAdjacentHTML('afterbegin', '<span class="grid__line"></span>')
    }
  })
}

// добавляем кнопки раскрытия подменю
const menuItemWithSubmenu = document.querySelectorAll('.menu-item-has-children');
menuItemWithSubmenu.forEach(item => {
  if (item.lastElementChild.className !== 'menu__arrow') {
    item.insertAdjacentHTML('beforeend', '<span class="menu__arrow"></span>');
  }
})

// меню
const burger = document.querySelector('.header__burger');
burger.addEventListener('click', () => {
  document.querySelector('html').classList.toggle('scrollOff');
  burger.classList.toggle('open')
  // открываем/закрываем меню
  burger.closest('.header__nav').classList.toggle('open');

  const menuOpen = document.querySelector('.header__nav.open');
  const menu = document.querySelector('.header__nav');

  if (menuOpen) {
    // при открытии/закрытии закрыть все подменю
    const allActiveItems = menuOpen.querySelectorAll('.active');
    for (let i = 0; i < allActiveItems.length; i++) {
      allActiveItems[i].classList.remove('active');
    }
    // добавить событие открытия меню
    menuOpen.addEventListener('click', openSubmenu);
  } else {
    // убрать событие если закрыто 
    menu.removeEventListener('click', openSubmenu);
  }

})

// открытие подменю
function openSubmenu(event) {
  if (event.target.className === 'menu__arrow') {
    event.target.parentElement.classList.toggle('active');
  }
}

// fixed header
const header = document.querySelector('.header');
header.nextElementSibling.style.paddingTop = `${header.clientHeight}px`;

window.addEventListener('resize', () => {
  header.nextElementSibling.style.paddingTop = `${header.clientHeight}px`;
})

// banner
new Swiper(".banner", {
  speed: 600,
  parallax: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".banner .swiper-button-next",
    prevEl: ".banner .swiper-button-prev",
  },
});

// categories
new Swiper(".categories__slider", {
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 23,
  loop: true,
  navigation: {
    nextEl: ".categories__slider .swiper-button-next",
    prevEl: ".categories__slider .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 23,
    },
    581: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
  },
});

