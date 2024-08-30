const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Función para alternar el modo de alto contraste
const toggleHighContrast = () => {
    container.classList.toggle("high-contrast");
};

// Evento para cambiar al modo de registro
sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
    toggleHighContrast(); // Alterna el alto contraste al hacer clic en el botón de registro
});

// Evento para cambiar al modo de inicio de sesión
sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
    toggleHighContrast(); // Alterna el alto contraste al hacer clic en el botón de inicio de sesión
});
