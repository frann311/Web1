
/* ********** formulario *********** */

function corroborar() {
    let name = document.getElementById("idname");
    let session = document.getElementById("idsession");
    let email = document.getElementById("idemail");
    let nameError = document.getElementById("nameError"); 
    let sessionError = document.getElementById("sessionError"); 
    let emailError = document.getElementById("emailError"); 

    let isValid = true;

    if (name.value.trim() === "" || name.value.trim().length > 25) {
        nameError.textContent = "Nombre requerido (máximo 25 caracteres)";
        name.classList.add("error");
        isValid = false;
    } else {
        nameError.textContent = ""; 
        name.classList.remove("error");
    }

    if (session.value === "") {
        sessionError.textContent = "Session requerida";
        session.classList.add("error");
        isValid = false;
    } else {
        sessionError.textContent = ""; 
        session.classList.remove("error");
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.value.trim() === "" || !emailPattern.test(email.value)) {
        emailError.textContent = "Email requerido (formato válido)";
        email.classList.add("error");
        isValid = false;
    } else {
        emailError.textContent = ""; 
        email.classList.remove("error");
    }

    if (isValid) {

    

    let datosEnviadosContainer = document.getElementById("datosEnviadosContainer");
    datosEnviadosContainer.innerHTML = ""; 

    let nombreElement = document.createElement("p");
    nombreElement.textContent = "Nombre: " + name;

    let sessionElement = document.createElement("p");
    sessionElement.textContent = "Session: " + session;

    let emailElement = document.createElement("p");
    emailElement.textContent = "Email: " + email;

    datosEnviadosContainer.appendChild(nombreElement);
    datosEnviadosContainer.appendChild(sessionElement);
    datosEnviadosContainer.appendChild(emailElement);

    document.getElementById("enviados").style.display = "block";
  }

    return isValid;
}

/* ********** carrusel *********** */
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const images = carousel.getElementsByTagName("img");
    let currentIndex = 0;
  
    // Función para avanzar al siguiente elemento
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    }
  
    // Función para retroceder al elemento anterior
    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    }
  
    // Función para actualizar el carrusel con la imagen actual
    function updateCarousel() {
      for (let i = 0; i < images.length; i++) {
        if (i === currentIndex) {
          images[i].style.display = "block";
        } else {
          images[i].style.display = "none";
        }
      }
    }
  
    // Agregar eventos a los botones
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  
    // Mostrar la primera imagen
    updateCarousel();
  });
  