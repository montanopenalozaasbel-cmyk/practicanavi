
var platos = [
  { nombre: "Pavo al horno", precio: 25 },
  { nombre: "Pernil de cerdo", precio: 22 },
  { nombre: "Tamales", precio: 8 },
  { nombre: "Ensalada rusa", precio: 6 },
  { nombre: "Panettone", precio: 10 },
  { nombre: "Ponche navideño", precio: 5 }
];

var carrito = [];

function mostrarPlatos() {
  var lista = document.getElementById("menuPlatos");
  for (var i = 0; i < platos.length; i++) {
    var li = document.createElement("li");
    li.textContent = platos[i].nombre + " - $" + platos[i].precio + " ";

    var boton = document.createElement("button");
    boton.textContent = "Agregar";
    boton.onclick = crearAccion(i);   
    li.appendChild(boton);
    lista.appendChild(li);
  }
}


function crearAccion(numero) {
  return function () {
    carrito.push(platos[numero]);
    mostrarCarrito();
  };
}

function mostrarCarrito() {
  var lista = document.getElementById("carrito");
  lista.innerHTML = ""; 
  var total = 0;

  for (var i = 0; i < carrito.length; i++) {
    var li = document.createElement("li");
    li.textContent = carrito[i].nombre + " - $" + carrito[i].precio + " ";

    var quitar = document.createElement("button");
    quitar.textContent = "Quitar";
    quitar.onclick = quitarPlato(i);
    li.appendChild(quitar);
    lista.appendChild(li);

    total = total + carrito[i].precio;
  }

  document.getElementById("total").textContent = total;
}

function quitarPlato(posicion) {
  return function () {
    carrito.splice(posicion, 1);   // elimina 1 elemento
    mostrarCarrito();
  };
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}

mostrarPlatos();