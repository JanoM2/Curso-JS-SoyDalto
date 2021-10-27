// Deberia usar "return" en vez de "alert" pero es asi por el ejercicio

function comprarHelado(n) {
  let din = prompt(`¿Cuanto dinero tienes ${n}?`);

  if (din >= 0.6 && din < 1) {
    alert(`Tu Helado de Agua, ${n} Y tu vuelto es ` + parseInt(din - 0.6));
  }
  if (din >= 1 && din < 1.6) {
    alert(`Tu Helado de Crema, ${n} Y tu vuelto es ` + parseInt(din - 1));
  }
  if (din >= 1.6 && din < 1.7) {
    alert(`Helado Heladix, ${n} Y tu vuelto es ` + parseInt(din - 1.6));
  }
  if (din >= 1.7 && din < 1.8) {
    alert(`Helado Helardovich, ${n} Y tu vuelto es ` + parseInt(din - 1.7));
  }
  if (din >= 1.8 && din < 2.9) {
    alert(`Helado de Helardo, ${n} Y tu vuelto es ` + parseInt(din - 1.8));
  }
  if (din >= 2.9) {
    alert(
      `${n}, Puedes elegir Helado con Confites O Pote de 1/4KG Y tu vuelto es ` +
        parseInt(din - 2.9)
    );
  }
  if (din <= 0.5) {
    alert("Vuelve con Dinero");
  }
}

comprarHelado("Roberto");
comprarHelado("Pedro");
comprarHelado("Cofla");
