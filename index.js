/* ********** formulario *********** */

function corroborar() {
  let name = document.getElementById("idname").value;
  let session = document.getElementById("idsession").value;
  let email = document.getElementById("idemail").value;
  let nameError = document.getElementById("nameError");
  let sessionError = document.getElementById("sessionError");
  let emailError = document.getElementById("emailError");

  let isValid = true;

  if (name.trim() === "" || name.trim().length > 25) {
      nameError.textContent = "Nombre requerido (máximo 25 caracteres)";
      document.getElementById("idname").classList.add("error");
      isValid = false;
  } else {
      nameError.textContent = "";
      document.getElementById("idname").classList.remove("error");
  }

  if (session === "") {
      sessionError.textContent = "Session requerida";
      document.getElementById("idsession").classList.add("error");
      isValid = false;
  } else {
      sessionError.textContent = "";
      document.getElementById("idsession").classList.remove("error");
  }

  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email.trim() === "" || !emailPattern.test(email)) {
      emailError.textContent = "Email requerido (formato válido)";
      document.getElementById("idemail").classList.add("error");
      isValid = false;
  } else {
      emailError.textContent = "";
      document.getElementById("idemail").classList.remove("error");
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

  return false;
}
/* ********** carrusel *********** */
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  if (!carousel) {
    return; 
  }

  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const images = carousel.getElementsByTagName("img");
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  function updateCarousel() {
    for (let i = 0; i < images.length; i++) {
      if (i === currentIndex) {
        images[i].style.display = "block";
      } else {
        images[i].style.display = "none";
      }
    }
  }

  if (prevButton) {
    prevButton.addEventListener("click", prevSlide);
  }

  if (nextButton) {
    nextButton.addEventListener("click", nextSlide);
  }

  updateCarousel();
});
