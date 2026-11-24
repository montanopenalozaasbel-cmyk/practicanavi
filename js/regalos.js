
function agregarRegalo() {
  var campo = document.getElementById("nuevoRegalo");
  var texto = campo.value.trim();   
  if (texto === "") {
    alert("Escribe el nombre de un regalo");
    return;
  }

  var li = document.createElement("li");

  
  var span = document.createElement("span");
  span.textContent = texto + " ";


  var botonOk = document.createElement("button");
  botonOk.textContent = "✔ Comprado";
  botonOk.onclick = function () {
    span.classList.toggle("comprado");   
  };

  
  var botonEliminar = document.createElement("button");
  botonEliminar.textContent = "✖ Eliminar";
  botonEliminar.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(botonOk);
  li.appendChild(botonEliminar);
  document.getElementById("listaRegalos").appendChild(li);

  
  campo.value = "";
  campo.focus();
}