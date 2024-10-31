// Inserta el HTML del menú en el body cuando se carga la página
const headerHTML = `
  <header>
    <!-- Botón para mostrar/ocultar el menú -->
    <button id="menu-toggle">☰</button>
    <nav id="sidebar">
      <ul>
        <li><a href="../html/index.html">Inicio</a></li>
        <li><a href="../html/producto.html">Productos</a></li>
        <li><a href="../html/carrito.html">Carrito</a></li>
        <li><a href="../html/perfil.html">Perfil</a></li>
        <li><a href="../html/login.html">Login/Registro</a></li>
      </ul>
    </nav>
  </header>
`;

// Inserta el menú en el body
document.body.insertAdjacentHTML('afterbegin', headerHTML);

// Selecciona el botón y el menú
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Agrega el evento click al botón
menuToggle.addEventListener('click', function () {
  sidebar.classList.toggle('active'); // Añade o quita la clase 'active' al menú
});

