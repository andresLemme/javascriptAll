try {
  console.log("se agrega el codigo a evaluar");
  noexiste;
  console.log("2 mensaje en el try");
} catch (error) {
  console.log("catch captura cualquier error que suceda en el Try");
  console.log(error);
} finally {
  console.log("se ejecuta siempre al final de un bloque Try-Catch");
}

console.log("----------------");

try {
  let numero = "f";
  if (isNaN(numero)) {
    throw new Error("el caracter introducido no es un numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguente error: ${error}`);
}
