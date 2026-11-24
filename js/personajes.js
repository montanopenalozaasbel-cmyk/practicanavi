
var descripciones = {
  papa: "🎅 Papá Noel: un señor de barba blanca y traje rojo que reparte regalos en Nochebuena.",
  reno: "🦌 Rudolf: el reno de nariz roja que guía el trineo de Papá Noel.",
  muneco: "⛄ Muñeco de nieve: se hace con bolas de nieve, una zanahoria de nariz y una bufanda.",
  duende: "🧝 Duende: el ayudante de Papá Noel que fabrica los juguetes en el taller."
};

function mostrar(personaje) {
  var caja = document.getElementById("descripcion");
  caja.textContent = descripciones[personaje];
}