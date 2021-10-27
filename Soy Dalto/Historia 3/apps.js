class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }
  Info() {
    return `Descargas: <b>${this.descargas}</b> <br>
    Puntuacion: <b>${this.puntuacion}</b> <br>
    Peso: <b>${this.peso}</b> <br> <hr>
    `;
  }
  abrir() {
    if (this.iniciada == false && this.instalada == true) {
      this.iniciada = true;
      alert("app iniciada");
    }
  }
  cerrar() {
    if (this.iniciada == true && this.instalada == true) {
      this.iniciada = false;
      alert("app cerrada");
    }
  }
  instalar() {
    if (this.instalada == false) {
      this.instalada = true;
      alert("app instalada");
    }
  }
  desintalar() {
    if (this.instalada == true) {
      this.instalada = false;
      alert("app desinstalada");
    }
  }
}

const app1 = new App("10.000", "3.5", "170mb");
const app2 = new App("20.000", "4", "150mb");
const app3 = new App("1.000", "2", "300mb");
const app4 = new App("5000", "3", "100mb");
const app5 = new App("100.000", "4.4", "500mb");
const app6 = new App("1M", "5", "1GB");
const app7 = new App("30M", "5", "900mb");

document.write(`
${app1.Info()}
${app2.Info()}
${app3.Info()}
${app4.Info()}
${app5.Info()}
${app6.Info()}
${app7.Info()}`);
