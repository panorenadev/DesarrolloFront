// Seleccionamos todos los botones de "Agregar al carrito"
const addToCartButtons = document.querySelectorAll('.producto button');

// Función para agregar un producto al carrito
function addToCart(event) {
    const productElement = event.target.closest('.producto');
    const productName = productElement.querySelector('h3').innerText;
    const productPrice = productElement.querySelector('p').innerText;
    const productImage = productElement.querySelector('img').src;

    // Crear objeto del producto
    const product = { name: productName, price: productPrice, image: productImage, quantity: 1 };

    // Obtener carrito desde localStorage y actualizarlo
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Buscar si el producto ya existe en el carrito
    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        // Si ya existe, aumentar la cantidad
        existingProduct.quantity += 1;
    } else {
        // Si no existe, agregarlo al carrito
        cart.push(product);
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} ha sido agregado al carrito`);
}

// Asignamos la función de agregar al carrito a cada botón en la página
addToCartButtons.forEach(button => button.addEventListener('click', addToCart));

// Función para mostrar productos en la página del carrito
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Limpiamos el contenedor
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" />
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <div class="quantity">
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
                <button onclick="removeFromCart(${index})" class="remove-btn">Eliminar</button>
            </div>
        `;
    });
}

// Función para aumentar la cantidad de un producto en el carrito
function increaseQuantity(index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Refrescamos el carrito en la página
}

// Función para disminuir la cantidad de un producto en el carrito
function decreaseQuantity(index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1); // Si la cantidad es 1, eliminar el producto
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Refrescamos el carrito en la página
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1); // Eliminamos el producto del carrito
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Refrescamos el carrito en la página
}

// Llamamos a la función displayCartItems solo si estamos en la página del carrito
document.addEventListener('DOMContentLoaded', () => {
    const isCartPage = document.getElementById('cart-items');
    if (isCartPage) {
        displayCartItems();
    }
});
