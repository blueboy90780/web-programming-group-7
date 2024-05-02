const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30, 
  loop: true, 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.next-button', 
    prevEl: '.previous-button', 
  },
});


const advertisementSwiper = new Swiper('.advertisement-carousel', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
  delay: 3000,
  disableOnInteraction: false,
},
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
});