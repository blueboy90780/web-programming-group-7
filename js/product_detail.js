function addToCart(productName) {
    alert(productName + ' has been added to the cart!');
    // Increment cart count
    var cartCountElement = document.getElementById('cartCount');
    var currentCount = parseInt(cartCountElement.textContent);
    cartCountElement.textContent = currentCount + 1;
  }
  
  function showCart() {
    // You can implement functionality to show the cart here
    alert('Display the cart here!');
  }
  