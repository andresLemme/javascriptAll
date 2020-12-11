let edad = 21;

if (edad > 17) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
console.log("-------------------");
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

console.log("-------------------");

if (edad < 18) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}

console.log("-------------------");

if (edad <= 17) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}

/*
Dejame dormir --> 0 hs - 5 hs
Buenos dias --> 6 hs - 11 hs
Buenas tardes --> 12 hs - 18 hs
Buenas Noches --> 19 - 23 hs
 */

console.log("-------------------");

let hora = 5;

if (hora >= 0 && hora <= 5) {
  console.log("Dejame dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("buenos dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tardes");
} else {
  console.log("buenas noches");
}

console.log("-------------------");

// operador ternario

console.log("Operador ternario");
let eresMayor = edad >= 18 ? "Erres mayor" : "Eres menor";
console.log(eresMayor);

console.log("-------------------");
//Switch Case
/*
Domingo - 0
Lunes - 1
Martes - 2
Miercoles - 3
Jueves - 4
Viernes - 5
Sabado - 6
*/

let dia = 11

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;

  default:
      console.log("Ingresar dia correcto")
    break;
}

console.log("-------------------");
