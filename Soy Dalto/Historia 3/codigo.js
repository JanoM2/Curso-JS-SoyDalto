// class humano {
//   constructor(nombre, raza, edad, altura, frase) {
//     this.nombre = nombre;
//     this.raza = raza;
//     this.edad = edad;
//     this.altura = altura;
//     this.frase = frase;
//     this.info = `Mi nombre es <strong>${this.nombre}</strong>, soy ${this.raza},
//     tengo ${this.edad} años y Mi <strong>Altura</strong> es de ${this.altura}<strong>cm</strong> <br> <hr>`;
//   }
//   verInfo() {
//     document.write(this.info);
//   }
//   saludar() {
//     console.log(this.frase);
//   }
// }

// const pedro = new humano("Pedro", "blanco", 30, 170, "Hola, Que tal?");
// const mei = new humano("Mei", "asiatica", 22, 160, "konichiwa");
// const jasir = new humano("Jasir", "afro americano", 25, 190, "hallo daar");

// pedro.verInfo();
// mei.verInfo();
// jasir.verInfo();

// pedro.saludar();
// mei.saludar();
// jasir.saludar();

class Animal {
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
  }
}

class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    super(especie, edad, color);
    this.raza = null;
  }
  set setRaza(newName) {
    this.raza = newName;
  }
  get getRaza() {
    return this.raza;
  }
}

class Gato extends Perro {
  constructor(especie, edad, color, raza) {
    super(especie, edad, color, raza);
  }
  maullar() {
    alert("Miau");
  }
}

class Chiken extends Perro {
  constructor(especie, edad, color, raza) {
    super(especie, edad, color, raza);
  }
  cacarear() {
    alert("Quiquiriquí");
  }
}

const dog = new Perro("can", 7, "negro", "doberman");
const cat = new Gato("felino", 5, "marron", "persa");
const chiken = new Chiken("ave", 6, "blanco", "gallo asiatico");

dog.setRaza = "Pedro";
cat.setRaza = "Jose";
chiken.setRaza = "Martin";

// document.write(`${dog.getRaza} <br>`);
// document.write(`${cat.raza} <br>`);
// document.write(`${chiken.raza} <br>`);

// cat.maullar();
// chiken.cacarear();

/*const gallo = {
  especie: "ave",
  edad: 3,
  color: "blanco",
  raza: "gallo",
  sonido: "Quiquiriquí",
};

document.write(gallo.sonido);*/
