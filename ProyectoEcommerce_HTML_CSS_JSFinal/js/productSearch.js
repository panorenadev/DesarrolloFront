// Captura el formulario y el campo de entrada
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const products = document.querySelectorAll('.producto');

// Escuchar el evento de submit del formulario
searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    const query = searchInput.value.toLowerCase().trim(); // Obtiene el valor de búsqueda y lo limpia

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        const productSize = product.getAttribute('data-size');
        const productColor = product.getAttribute('color').toLowerCase();
        

        // Verificar si el producto coincide con el nombre o la talla
        if (productName.includes(query) || productSize === query || productColor.includes(query)) {
            product.style.display = 'block'; // Muestra el producto si coincide
        } else {
            product.style.display = 'none'; // Oculta el producto si no coincide
        }
    });
});