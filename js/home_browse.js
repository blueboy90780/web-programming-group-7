const products = [
    { name: 'Bosch Dishwasher', price: 999.99, image: '../html/home/bosch.jpeg' },
    { name: 'Dryer Front Door Washing Machine', price: 609.59, image: '../html/home/dryerfrontloadwashingmachine.jpeg' },
    { name: 'Dyson  Airwrap', price: 499.99, image: '../html/home/dyson_airwrap.jpeg' },
    { name: 'Hampton Bay Fan', price: 79.49, image: '../html/home/hampton_bay_fan.jpeg' },
    { name: 'Philip Iron', price: 309.59, image: '../html/home/ironphilip.jpeg' },
    { name: 'LB3 Smart Lamp', price: 33.15, image: '../html/home/LB3smartlamp.jpeg' },
    { name: 'Panasonic Microwave', price: 109.99, image: '../html/home/panasonicmicrowave.jpeg' },
    { name: 'Panasonic Rice Cooker', price: 305.99, image: '../html/home/panasonicricecooker.jpeg' },
    { name: 'Samsung Integer Refrigerator', price: 1200.19, image: '../html/home/samsung_integer.jpeg' },
    { name: 'Samsung wind free air conditioner', price: 608.39, image: '../html/home/samsungwindfreeaircondition.jpeg' },
    { name: 'UHD LG Smart TV', price: 709.49, image: '../html/home/UHDLGsmartTV.jpeg' },
    { name: 'Viettel IHC33 Camera', price: 40.5, image: '../html/home/viettelHC33camera.jpeg' },
];

function renderProductList(sortOption) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; 

    let sortedProducts = [...products]; 

    if (sortOption === 'name') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'price') {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    sortedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
        `;
        productList.appendChild(productDiv);
    });
}

const browseOption = document.getElementById('browseOption');
browseOption.addEventListener('change', () => {
    const selectedOption = browseOption.value;
    renderProductList(selectedOption);
});

renderProductList('default');