const menuHamburger = document.querySelector('.menu-hamburguer');

function createSwiper(container, pagination, nextButton, prevButton) {
    return new Swiper(container, {
    slidesPerView: handleWidth(),
    spaceBetween: 30,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });
}

function handleWidth() {
    let getWidth = window.innerWidth || document.documentElement.clientWidth;
    let slideShow = 3;
  
    if (getWidth < 1001) {
      slideShow = 2;
    }
  
    if (getWidth < 700) {
      slideShow = 1;
    }
  
    return slideShow
  }
  
  menuHamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  
  links.forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.toggle('active');
    })
  })
  
  window.addEventListener('resize', () => {
    swiper.params.slidesPerView = handleWidth();
    swiper.update();
  })

  



  