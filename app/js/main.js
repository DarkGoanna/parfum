// фон сетки
if (document.querySelector('.grid')) {
  document.querySelectorAll('.grid').forEach(box => {
    box.closest('.container').style.position = 'relative';
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

// фиксим проваливание блока идущего после fixed header
function fixHeaderHeight() {
  header.nextElementSibling.style.paddingTop = `${header.clientHeight}px`;
}

// fixed header
const header = document.querySelector('.header');

// при загрузке пересчитываем высоту header
window.addEventListener('load', fixHeaderHeight)

// при скролле
document.addEventListener('scroll', () => {
  fixHeaderHeight();
  if (window.scrollY > 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

// при ресайзе пересчитываем высоту header
window.addEventListener('resize', fixHeaderHeight)

// banner
if (document.querySelector('.banner')) {
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
}


// categories
if (document.querySelector('.categories__slider')) {
  new Swiper(".categories__slider", {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 23,
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
}


// catalog
// if (document.querySelector('.catalog__slider')) {
//   document.querySelectorAll('.catalog__slider').forEach(slider => {
//     const next = slider.parentElement.querySelector(".swiper-button-next");
//     const prev = slider.parentElement.querySelector(".swiper-button-prev");
//     new Swiper(slider, {
//       navigation:{
//         nextEl:next,
//         prevEl:prev,
//       },
//       breakpoints: {
//         320: { slidesPerView: 1 },
//         480: { slidesPerView: 2 },
//         580: { slidesPerView: 3 },
//         768: {
//           slidesPerView: 4,
//           spaceBetween: 20
//         },
//         1000: {
//           slidesPerView: 4,
//           spaceBetween: 50
//         }
//       }
//     })
//   })
// }

// gallery
if (document.querySelector('.gallery__slider')) {
  new Swiper(".gallery__slider", {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      581: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 3,
      },
    },
  });
}

//reviews
if (document.querySelector('.reviews__slider')) {
  new Swiper(".reviews__slider", {
    speed: 600,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".reviews__slider .swiper-button-next",
      prevEl: ".reviews__slider .swiper-button-prev",
    },
  });
}

// is ios
function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

window.addEventListener('load', () => {
  if (iOS()) document.querySelector('html').classList.add('ios');
})

// slider in product page
if (document.querySelector('.product__gallery')) {
  const product__gallery_small = new Swiper(".product__gallery_small", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: "vertical",
  });
  new Swiper(".product__gallery_big", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: product__gallery_small,
    },
  });
}