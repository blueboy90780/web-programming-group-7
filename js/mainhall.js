const swiperOptions = {
  slidesPerView: 4,
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
};

const newStoresSwiper = new Swiper('.new-stores .swiper-container', swiperOptions);
const newProductsSwiper = new Swiper('.new-products .swiper-container', swiperOptions);

const advertisementSwiper = new Swiper('.advertisement-carousel', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  height: 500,
});

const searchInput = document.getElementById('search');
const searchSuggestions = document.getElementById('search-suggestions');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm.length > 0) {
    fetchSearchSuggestions(searchTerm);
  } else {
    searchSuggestions.innerHTML = '';
  }
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const searchTerm = searchInput.value.trim();
    if (searchTerm.length > 0) {
      window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
    }
  }
});

function fetchSearchSuggestions(searchTerm) {
}
fetchFeaturedStores();
fetchFeaturedProducts();

function fetchFeaturedStores() {
}

function fetchFeaturedProducts() {
}

const storeCards = document.querySelectorAll('.store-card');
const productCards = document.querySelectorAll('.product-card');

storeCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  });
});

productCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  });
});