const saleProductsSwiper = new Swiper('.sale-products.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
fetchSaleProducts();


function fetchSaleProducts() {
  const saleProducts = [
    {
      id: 1,
      name: 'Sleeping Rabbit Long Pillow',
      image: 'rabbitbolster.jpeg',
      price: 15.99,
      originalPrice: 29.99,
    },
    {
      id: 2,
      name: 'METRO TOY n Gift 32cm Cute Gorgeous Girll Doll Toy ',
      image: 'doll.jpeg',
      price: 99.99,
      originalPrice: 179.99,
    },
    {
      id: 1,
      name: 'Cute Brown Teddy Bear',
      image: 'teddybear.jpeg',
      price: 49.99,
      originalPrice: 99.99,
    },
  ];

  const swiperWrapper = document.querySelector('.sale-products .swiper-wrapper');

  saleProducts.forEach((product) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const name = document.createElement('h3');
    name.textContent = product.name;

    const price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = `$${product.price} <span class="original-price">$${product.originalPrice}</span>`;

    productCard.appendChild(img);
    productCard.appendChild(name);
    productCard.appendChild(price);

    slide.appendChild(productCard);
    swiperWrapper.appendChild(slide);
  });
}

const countDownDate = new Date(new Date().getTime() + (15 * 60 * 1000)).getTime();

const countdownTimer = document.querySelector('.countdown-timer');

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownTimer.innerHTML = `
    <span class="days">${days.toString().padStart(2, '0')}</span>
    <span class="time-separator">:</span>
    <span class="hours">${hours.toString().padStart(2, '0')}</span>
    <span class="time-separator">:</span>
    <span class="minutes">${minutes.toString().padStart(2, '0')}</span>
    <span class="time-separator">:</span>
    <span class="seconds">${seconds.toString().padStart(2, '0')}</span>
  `;

  if (distance < 0) {
    clearInterval(countdown);
    countdownTimer.innerHTML = 'Offer Expired';
  }
}, 1000);