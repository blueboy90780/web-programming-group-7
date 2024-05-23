const products = [
    { name: 'Airpods Max', price: 305, image: '../html/technology/airpodsmax.jpeg' },
    { name: 'Airpods Pro', price: 510, image: '../html/technology/airpodspro2.jpeg' },
    { name: 'Canon Pixma', price: 709.99, image: '../html/technology/canonpixma.jpeg' },
    { name: 'Coller Master Fan', price: 14.99, image: '../html/technology/collermasterfan.jpeg' },
    { name: 'Dell XPS 17 2023', price: 1799.99, image: '../html/technology/dellxps17.jpeg' },
    { name: 'Fujifilm XT30', price: 1459.79, image: '../html/technology/fujifilm-xt30.jpeg' },
    { name: 'Game Keyboard Hyper XAI', price: 65.70, image: '../html/technology/gamekeyboardhyperXAlloy.jpeg' },
    { name: 'Ipad Mini 6', price: 459.49, image: '../html/technology/ipadmini6.jpeg' },
    { name: 'Logitech MX Master 3s', price: 39.99, image: '../html/technology/logitechmxmaster3s.jpeg' },
    { name: 'Microsoft Laptop Studio', price: 1499.59, image: '../html/technology/microsoftlaptoptudio.jpeg' },
    { name: 'Nitendo Switch Lite', price: 14.99, image: '../html/technology/nitendoswitchlite.jpeg' },
    { name: 'Playstation 5', price: 599.99, image: '../html/technology/playstation5.jpeg' },
    { name: 'Samsung Z Flip 5 ', price: 399.59, image: '../html/technology/zflip5.jpeg' },
    { name: 'Anker Powercore', price: 44.50, image: '../html/technology/Anker_powercore.jpeg' },
    { name: 'Tripod Benro T891', price: 34.49, image: '../html/technology/tripodbenroT891.jpeg' },
    { name: 'Canon EF24 Lens', price: 200, image: '../html/technology/canonef24lens.jpeg' },

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