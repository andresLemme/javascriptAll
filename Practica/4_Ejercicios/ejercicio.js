/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/

const numPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");

  if (typeof numero !== "number")
    return console.error(`el valor ${numero} ingresado NO es un numero`);

  if (numero === 0) return console.error("El numero no puede ser 0");

  if (numero == 1) return console.error("el numero no puede ser 1");

  if (Math.sign(numero) === -1)
    return console.error("El numero no puede ser negativo");

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.log(`el numero  ${numero} NO es primo`)
    : console.log(`el numero ${numero} SI es primo`);
};

numPrimo();
numPrimo("34");
numPrimo(0);
numPrimo(1);
numPrimo(-1);
numPrimo(19);
numPrimo(20);
numPrimo(true);

console.log("----------------------");

/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/

const numPArImpar = (numero = undefined) => {
  if (numero === undefined) return console.error("no se ingreso un numero");

  if (typeof numero !== "number")
    return console.error(`el valor ${numero} ingresado NO es un numero`);

  return numero % 2 === 0
    ? console.info(`el numero ${numero} ingresado es PAR`)
    : console.info(`el numero ${numero} ingresado es IMPAR`);
};

numPArImpar();
numPArImpar("Hola");
numPArImpar(3);
numPArImpar(36);
numPArImpar(-348);

console.log("--------------------");

/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

*/
const convertir = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.warn("no ingresaste grados a convertir");

  if (typeof grados !== "number")
    return console.error(`el valor ${grados}  ingresado no es un numero`);

  if (unidad === undefined)
    return console.warn("no ingresaste la unidad a convertir");

  if (typeof unidad !== "string")
    return console.error(
      `el valor ${unidad} ingresado no es una cadena de texto`
    );

  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor de unidad no reconocido");

  if (unidad === "C") {
    return console.info(`${grados}ºC = ${Math.round(grados * (9 / 5) + 32)}ºF`);
  } else if (unidad === "F") {
    return console.info(
      `${grados}ºF = ${Math.round((grados - 32) * (5 / 9))}ºC`
    );
  } else {
    return console.error("el tipo de grados a convertir NO es valido");
  }
};

convertir();
convertir("sadasda");
convertir(2);
convertir(2, true);
convertir(2, "hola");
convertir(2, "D");
convertir(100, "C");
convertir(50, "F");
