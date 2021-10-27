const trabajo = "240 minutos de trabajo";
const descanso = "10 minutos de descanso";
const estudio = "100 minutos de estudio";
const tp = "100 minutos de trabajos practicos";
const tareasDomesticas = "30 minutos de las tareas domesticas";

for (i = 1; i <= 14; i++) {
  if (i == 1) {
    console.group("semana 1");
  }
  console.groupCollapsed("dia " + i);
  console.log(trabajo);
  console.log(descanso);
  console.log(estudio);
  console.log(tp);
  console.log(tareasDomesticas);
  console.groupEnd();
  if (i == 7) {
    console.groupEnd();
    console.group("semana 2");
  }
}
