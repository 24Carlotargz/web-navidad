let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxOTA0NjM3LXdpa2ltZWRpYS1pbWFnZS1rb3dhcGhuNi5qcGc.jpg") {
    miImage.setAttribute("src", "https://nosolodulces.es/wp-content/uploads/2017/12/nosolodulces-galletas-springerle-navidad-alsacia-lecreuset-2.jpg");
  } else {
    miImage.setAttribute("src", "https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxOTA0NjM3LXdpa2ltZWRpYS1pbWFnZS1rb3dhcGhuNi5qcGc.jpg");
  }
};



let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h4");

function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  if (miNombre) {
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = `Una página web en la que te ofrecemos distintos planes ideales para poder hacer en estas festividades, ${miNombre}`;
  } else {
    alert("El nombre no puede estar vacío. Inténtalo de nuevo.");
    estableceNombreUsuario();
  }
}


if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = `Una página web en la que te ofrecemos distintos planes ideales para poder hacer en estas festividades, ${nombreAlmacenado}`;
}



miBoton.onclick = estableceNombreUsuario;

const images = document.querySelectorAll("#gallery img");
images.forEach(img => {
  img.addEventListener("click", event => {
    event.preventDefault();

    alert(`¡Hiciste clic en ${img.alt}!`);
  });
});

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";


  snowflake.style.left = Math.random() * window.innerWidth + "px";

  snowflake.style.fontSize = Math.random() * 20 + 10 + "px";


  document.getElementById("snow-container").appendChild(snowflake);


  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

setInterval(createSnowflake, 200);
