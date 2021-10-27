class Calculadora {
  constructor() {}
  sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
  }

  restar(n1, n2) {
    return parseInt(n1) - parseInt(n2);
  }

  dividir(n1, n2) {
    return parseInt(n1) / parseInt(n2);
  }

  multiplicar(n1, n2) {
    return parseInt(n1) * parseInt(n2);
  }
  potenciar(n1, n2) {
    return n1 ** n2;
  }
  raizCuadrada(n1) {
    return Math.sqrt(n1);
  }
  raizCubica(n1) {
    return Math.cbrt(n1);
  }
}

const calculadora = new Calculadora();

let operacion = prompt(
  "1: sumar, 2: restar, 3: dividir, 4: multiplicar, 5: potenciacion, 6: raiz cuadrada, 7: raiz cubica"
);
// ------------------------------------------------------------------------

if (operacion == 1 || operacion == "sumar") {
  n1 = prompt("numero 1");
  n2 = prompt("numero 2");
  resultado = calculadora.sumar(n1, n2);
  alert(`El resultado es ${resultado}`);
}

if (operacion == 2 || operacion == "restar") {
  n1 = prompt("numero 1");
  n2 = prompt("numero 2");
  resultado = calculadora.restar(n1, n2);
  alert(`El resultado es ${resultado}`);
}

if (operacion == 3 || operacion == "dividir") {
  n1 = prompt("numero 1");
  n2 = prompt("numero 2");
  resultado = calculadora.dividir(n1, n2);
  alert(`El resultado es ${resultado}`);
}

if (operacion == 4 || operacion == "multiplicar") {
  n1 = prompt("numero 1");
  n2 = prompt("numero 2");
  resultado = calculadora.multiplicar(n1, n2);
  alert(`El resultado es ${resultado}`);
}

if (operacion == 5 || operacion == "multiplicar") {
  n1 = prompt("numero 1");
  n2 = prompt("numero 2");
  resultado = calculadora.potenciar(n1, n2);
  alert(`El resultado es ${resultado}`);
}

if (operacion == 6 || operacion == "raiz cuadrada") {
  n1 = prompt("numero 1");
  resultado = calculadora.raizCuadrada(n1);
  alert(`El resultado es ${resultado}`);
}

if (operacion == 7 || operacion == "raiz cubica") {
  n1 = prompt("numero 1");
  resultado = calculadora.raizCubica(n1);
  alert(`El resultado es ${resultado}`);
}
