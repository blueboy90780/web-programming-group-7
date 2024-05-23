function addToCart(event, productName) {
  event.stopPropagation();
  alert(productName + ' has been added to the cart!');
  var cartCountElement = document.getElementById('cartCount');
  var currentCount = parseInt(cartCountElement.textContent);
  cartCountElement.textContent = currentCount + 1;
}

function showCart() {
  alert('Display the cart here!');
}
