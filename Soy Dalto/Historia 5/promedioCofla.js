console.log("SI ESTA TODO EN VERDE, ESTÁ APROBADO");

const materias = {
  fisica: [90, 7, 4, "fisica"],
  matematica: [50, 4, 1, "matemica"],
  quimica: [80, 6, 2, "quimica"],
  historia: [95, 9, 4, "historia"],
  arte: [100, 10, 4, "arte"],
  edfisica: [100, 10, 4, "edfisica"],
  logica: [90, 7, 3, "logica"],
  programacion: [90, 7, 4, "programacion"],
  ntix: [98, 9, 4, "ntix"],
};

const asistencia = () => {
  for (materia in materias) {
    let asistencias = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajos = materias[materia][2];

    if (asistencias >= 90) {
      console.log(materias[materia][3]);
      console.log("%c   Asistencias en orden", "color:green");
    } else {
      console.log(materias[materia][3]);
      console.log("%c   Falta de Asistencias", "color:red");
    }

    if (promedio >= 7) {
      console.log("%c   Promedio en orden", "color:green");
    } else {
      console.log("%c   Promedio desaprobado", "color:red");
    }

    if (trabajos >= 3) {
      console.log("%c   Trabajos en orden", "color:green");
    } else {
      console.log("%c   Falta de trabajos", "color:red");
    }
  }
};

asistencia();
