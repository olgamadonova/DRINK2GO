const swiper = document.querySelector('.swiper');

const initSlider = () => {
  new Swiper(swiper, {
    initialSlide:0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type:'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
  });
};

export {initSlider};
