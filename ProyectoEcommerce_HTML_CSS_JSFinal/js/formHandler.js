// Arreglo para almacenar usuarios
let users = JSON.parse(localStorage.getItem("users")) || [];

document.addEventListener("DOMContentLoaded", () => {
    // Manejo del formulario de inicio de sesión
    const loginForm = document.getElementById("login-form");
    const loginErrorDiv = document.getElementById("login-error");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar el envío del formulario
        loginErrorDiv.textContent = ""; // Limpiar mensajes de error

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Verificar las credenciales
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            console.log("Iniciar Sesión:");
            console.log("Usuario autenticado:", user);
            alert("Inicio de sesión exitoso.");
            window.location.href = "../html/perfil.html"; 
        } else {
            loginErrorDiv.textContent = "Credenciales incorrectas. Intenta de nuevo.";
        }
    });

    // Manejo del formulario de registro
    const registerForm = document.getElementById("register-form");
    const registerErrorDiv = document.getElementById("register-error");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar el envío del formulario
        registerErrorDiv.textContent = ""; // Limpiar mensajes de error

        const name = document.getElementById("namereg").value;
        const registerEmail = document.getElementById("register-email").value;
        const registerPassword = document.getElementById("register-password").value;

        // Verificar si el usuario ya está registrado
        const existingUser = users.find(u => u.email === registerEmail);

        if (existingUser) {
            registerErrorDiv.textContent = "Este correo ya está registrado.";
        } else {
            // Registrar nuevo usuario
            const newUser = {
                name: name,
                email: registerEmail,
                password: registerPassword
            };
            users.push(newUser); // Añadir el nuevo usuario al arreglo
            localStorage.setItem("users", JSON.stringify(users)); // Guardar en localStorage
            console.log("Registro exitoso:");
            console.log(newUser);
            alert("Registro exitoso. Puedes iniciar sesión ahora.");
            registerForm.reset(); // Limpiar el formulario de registro
        }
    });
});
