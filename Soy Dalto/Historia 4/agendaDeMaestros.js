// crear funcion que al pasarle como parametro la materia nos devuelva
// profesor asignado y el nombre de todos los alumnos

function obtenerInformacion(materia) {
  //funcion con parametro materia
  let materias = {
    //objeto = materias, key = materia, value = arrays
    fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
    programacion: ["Dalto", "pedro", "juan", "pepito"],
    logica: ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
    quimica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"],
  };
  if (materias[materia] !== undefined) {
    //SI materias[materia] es distinto a INDEFINIDO devolver materias[X MATERIA]
    return [materias[materia], materia, materias];
  } else {
    return materias; //sino devolver FALSO o materias
  }
}

const mostrarInformacion = (materia) => {
  let informacion = obtenerInformacion(materia); //llamo a la funcion obtenerInformacion y como parametro le pido "fisica"

  if (informacion !== false) {
    //si informacion es DISTINTO a FALSO imprimir el document.write() de abajo, SI ES FALSO NO HACER NADA
    let profesor = informacion[0][0]; //profesor es igual a [materias[materia],materia] = [materias[fisica],1er valor]
    let alumnos = informacion[0]; // alumnos es igual a materia[materia] = fisica[strings]
    alumnos.shift(); // aca borro el primer elemento que es "Perez" y asi lograr que en alumnos no esté el nombre del profesor
    document.write(
      // aca imprimo todo
      `El profesor de <big><u>${informacion[1]}</u></big> es: <b>${profesor}</b> <br>
    Y sus alumnos son: <b>${alumnos}</b> <br> <hr>`
    );
  }
};

const cantidadDeClases = (alumno) => {
  // funcion que toma como parametro ALUMNO
  let informacion = obtenerInformacion(); // variable que llama a la funcion obtenerInformacion() para asi tener sus datos
  let clasesPresentes = []; // array vacio para luego llenar
  let cantidadTotal = 0; // "contador"
  for (info in informacion) {
    // cada elemento de informacion pasa a info y se cuenta cada vez que pasa el elemento
    if (informacion[info].includes(alumno)) {
      // se fija si en informacion[info] hay algun ALUMNO
      cantidadTotal++; // y SI hay algun ALUMNO se suma 1 vez
      clasesPresentes.push(" " + info); // y "empuja"/mete las materias/elementos que hay en info
    }
  }
  return `<b>${alumno}</b> enta en <u>${cantidadTotal}</u> clases. Y
  Esta cursando las clases: <b>${clasesPresentes}</b> <br> 
  `; // esto escribe el alumno que yo le pido Ej:("cofla"), las cantidad de veces que se lo encontró y las clases en las que se lo encontró
};

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("logica");
mostrarInformacion("programacion");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("pedro"));
