// Selección de elementos del DOM
const area = document.querySelector("#texto");
const caracteres = document.querySelector("#caracteres");
const palabras = document.querySelector("#palabras");
const sinEspacios = document.querySelector("#sinEspacios");
const restantes = document.querySelector("#restantes");
const tarjetaRestantes = document.querySelector("#tarjetaRestantes");
const btnLimpiar = document.querySelector("#limpiar");

const LIMITE = 280;

function actualizar() {
  const valor = area.value;

  // Caracteres totales
  caracteres.textContent = valor.length;

  // Palabras (contemplando texto vacío)
  const t = valor.trim();
  palabras.textContent = t === "" ? 0 : t.split(/\s+/).length;

  // Sin espacios
  sinEspacios.textContent = valor.replaceAll(" ", "").length;

  // Restantes según el límite
  const restan = LIMITE - valor.length;
  restantes.textContent = restan;

  // Aviso visual al pasarse del límite
  if (valor.length > LIMITE) {
    area.classList.add("excedido");
    tarjetaRestantes.classList.add("excedido");
  } else {
    area.classList.remove("excedido");
    tarjetaRestantes.classList.remove("excedido");
  }
}

area.addEventListener("input", actualizar);

// Bonus: botón limpiar
btnLimpiar.addEventListener("click", () => {
  area.value = "";
  actualizar();
  area.focus();
});
