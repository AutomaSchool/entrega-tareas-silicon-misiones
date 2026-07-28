// ============================================================
// TRABAJO PRÁCTICO N.º 11 — Catálogo de herramientas de IA
// Módulo 2 · JavaScript Core — Arrays, objetos y destructuring
// ============================================================


// ===== PARTE A: array de valores simples =====
console.log("--- PARTE A ---");

// Punto 1: declarar array con mínimo 4 categorías
let categorias = ["generación de texto", "imágenes", "automatización", "voz"];

// Punto 2: mostrar array completo y cantidad de elementos
console.log(categorias);
console.log("Cantidad de categorías:", categorias.length);

// Punto 3: primer y último elemento (último con .length)
console.log("Primera categoría:", categorias[0]);
console.log("Última categoría:", categorias[categorias.length - 1]);

// Punto 4: agregar una categoría con .push()
categorias.push("edición de video");
console.log("Cantidad de categorías:", categorias.length);

// Punto 5: eliminar el último con .pop() y guardar el valor
let categoriaEliminada = categorias.pop();
console.log("Categoría eliminada:", categoriaEliminada);


// ===== PARTE B: objeto =====
console.log("--- PARTE B ---");

// Punto 6: declarar objeto usuario con 4 propiedades
let usuario = {
  nombre: "Lucrecia",
  edad: 50,
  ciudad: "Posadas",
  temaFavorito: "IA y automatización"
};

// Punto 7: frase construida con notación de punto
console.log("Nombre: " + usuario.nombre + " — Edad: " + usuario.edad + " — Ciudad: " + usuario.ciudad);
console.log("Tema favorito: " + usuario.temaFavorito);

// Punto 8: modificar una propiedad existente
usuario.edad = 51;
console.log("Edad actualizada:", usuario.edad);

// Punto 9: agregar una propiedad nueva y mostrar el objeto completo
usuario.profesion = "docente";
console.log(usuario);


// ===== PARTE C: array de objetos =====
console.log("--- PARTE C ---");

// Punto 10: declarar catalogo con mínimo 4 objetos
let catalogo = [
  { titulo: "Claude", categoria: "generación de texto", puntaje: 10, visto: true },
  { titulo: "Canva",  categoria: "imágenes",            puntaje: 9,  visto: true },
  { titulo: "Make",   categoria: "automatización",      puntaje: 8,  visto: false },
  { titulo: "ElevenLabs", categoria: "voz",             puntaje: 7,  visto: false }
];

// Punto 11: título del primer elemento y puntaje del tercero
console.log("Primer título:", catalogo[0].titulo);
console.log("Puntaje del tercer elemento:", catalogo[2].puntaje);

// Punto 12: línea descriptiva del segundo elemento
let estadoSegundo = catalogo[1].visto ? "visto" : "pendiente";
console.log(catalogo[1].titulo + " — " + catalogo[1].categoria + " — " + catalogo[1].puntaje + "/10 — " + estadoSegundo);

// Punto 13: modificar el puntaje de un elemento
catalogo[2].puntaje = 9;
console.log("Puntaje actualizado:", catalogo[2].puntaje);

// Punto 14: agregar un quinto elemento con .push()
catalogo.push({ titulo: "CapCut", categoria: "edición de video", puntaje: 8, visto: true });
console.log("Cantidad de elementos del catálogo:", catalogo.length);


// ===== PARTE D: destructuring =====
console.log("--- PARTE D ---");

// Punto 15: destructuring de objeto sobre catalogo[0]
let { titulo, categoria, puntaje, visto } = catalogo[0];
let estadoPrimero = visto ? "visto" : "pendiente";
console.log(titulo + " — " + categoria + " — " + puntaje + "/10 — " + estadoPrimero);

// Punto 16: destructuring de objeto sobre usuario
let { nombre, ciudad } = usuario;
console.log("Nombre: " + nombre + " — Ciudad: " + ciudad);

// Punto 17: destructuring de array sobre catalogo
let [primero, segundo] = catalogo;
console.log("Primero:", primero.titulo);
console.log("Segundo:", segundo.titulo);


// ===== PARTE E: complementaria (opcional) =====
console.log("--- PARTE E ---");

// Punto 18: renombrado en destructuring
let { titulo: tituloDestacado } = catalogo[3];
console.log("Título destacado:", tituloDestacado);

// Punto 19: valor por defecto para propiedad inexistente
let { hobby = "sin datos" } = usuario;
console.log("Hobby:", hobby);

// Punto 20: intercambio de variables sin variable auxiliar
let a = 20;
let b = 10;
[a, b] = [b, a];
console.log("Valores intercambiados: a = " + a + ", b = " + b);


