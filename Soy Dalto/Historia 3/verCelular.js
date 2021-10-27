class Celular {
  constructor(nombre, color, peso, resolucionPantalla, resolucionCam, ram) {
    this.nombre = nombre;
    this.color = color;
    this.peso = peso;
    this.resolucionPantalla = resolucionPantalla;
    this.resolucionCam = resolucionCam;
    this.ram = ram;
  }
  verInfo() {
    document.write(`<strong>${this.nombre} </strong> <br>
    Color: <strong>${this.color}</strong> <br>
    Peso : <strong> ${this.peso}</strong> <br>
    Resolucion de Pantalla : <strong> ${this.resolucionPantalla}</strong> <br>
    Resolucion de la Camara : <strong> ${this.resolucionCam}</strong> <br>
    Memoria RAM : <strong> ${this.ram}</strong> <br> <hr>`);
  }
  prender() {
    alert("El celular se ha encendido");
  }
  reiniciar() {
    alert("El celular se ha reiniciado");
  }
  tomarFoto() {
    alert("Has sacado una foto");
  }
  grabar() {
    alert("El celular grabó un video");
  }
}

const celular1 = new Celular("Celular 1", "Negro", "120g", "5'", "HD", "2GB");
const celular2 = new Celular(
  "Celular 2",
  "Blanco",
  "100g",
  "5.5'",
  "HD",
  "2.5GB"
);

//celular1.verInfo();
//celular2.verInfo();

// class Celular1 extends Celulares {
//     constructor(color, peso, resPantalla, resCam, ram){
//         super(color, peso, resPantalla, resCam, ram)
//     }
//     prender(){}
//     reiniciar(){}
//     tomarFotos(){}
//     grabar(){}
// }

class CelularAltaGama extends Celular {
  constructor(color, peso, resolucionPantalla, resolucionCam, ram) {
    super(color, peso, resolucionPantalla, resolucionCam, ram);
  }
  slowMotion() {
    alert("Estas en Modo Camara Lenta");
  }
  reconocimientoFacial() {
    alert("Reconocimiento Facial activado, Mira la camara frontal por favor");
  }
  camaraExtra() {
    console.log("Tenes una camara extra, que mas queres saber boludito");
  }
}

const celuAltaGama1 = new CelularAltaGama(
  "Celular de Alta Gama 1",
  "Rojo",
  "140g",
  "6'",
  "Full HD",
  "3GB"
);
const celuAltaGama2 = new CelularAltaGama(
  "Celular de Alta Gama 2",
  "Azul",
  "150g",
  "6,2'",
  "HD",
  "4GB"
);
