const sumar = (n1, n2) => {
  return (resultado = parseInt(n1) + parseInt(n2));
};

const restar = (n1, n2) => {
  return (resultado = parseInt(n1) - parseInt(n2));
};

const dividir = (n1, n2) => {
  return (resultado = parseInt(n1) / parseInt(n2));
};

const multiplicar = (n1, n2) => {
  return (resultado = parseInt(n1) * parseInt(n2));
};

// ------------------------------------------------------------------------
alert("Elige una operacion simple");
let operacion = prompt("1: sumar, 2: restar, 3: dividir, 4: multiplicar");
// ------------------------------------------------------------------------

if (operacion == 1 || operacion == "sumar") {
  n1 = prompt("numero 1");
  n2 = prompt("numero 2");
  sumar(n1, n2);
  alert(`El resultado es ${resultado}`);
}

if (operacion == 2 || operacion == "restar") {
  n1 = prompt("numero 1");
  n2 = prompt("numero 2");
  restar(n1, n2);
  alert(`El resultado es ${resultado}`);
}

if (operacion == 3 || operacion == "dividir") {
  n1 = prompt("numero 1");
  n2 = prompt("numero 2");
  dividir(n1, n2);
  alert(`El resultado es ${resultado}`);
}

if (operacion == 4 || operacion == "multiplicar") {
  n1 = prompt("numero 1");
  n2 = prompt("numero 2");
  multiplicar(n1, n2);
  alert(`El resultado es ${resultado}`);
}
