let arrayProducts = JSON.parse(localStorage.getItem('justClicked'));
$('.num-cart-product').html(parseInt(localStorage.getItem('numberOfProducts')));
let index = arrayProducts[arrayProducts.length - 1];
let productObj = JSON.parse(localStorage.getItem(index));
let img = document.createElement('img');
img.src = './images/men/' + productObj.src;
let price = productObj.price;
let quantity = productObj.quantity;
let amount = parseInt(price) * parseInt(quantity);
$('#product').append(img);
$('#price').html(price);
$('#quantity').html(quantity);
$('#amount').html(amount);
$('#total').html(amount);