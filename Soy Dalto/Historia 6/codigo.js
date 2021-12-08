const contenedor = document.querySelector(".contenedor");

const old_h2 = document.querySelector(".h2");

const new_h2 = document.createElement("H2");
new_h2.innerHTML = "Titulo";

contenedor.replaceChild(new_h2, old_h2);

let respuesta = old_h2.hasChildNodes();

// contenedor.removeChild(new_h2);

if (respuesta) {
  document.write("Yes, has child");
} else {
  document.write("No, hasn't child");
}

console.log(contenedor.parentElement);
