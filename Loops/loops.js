// while

let contador = 0;

// while (contador < 10) {
//   console.log(contador);
//   contador++;
// }

console.log("-----------------------");

do {
  console.log(`do while ${contador}`);
  contador++;
} while (contador < 10);

console.log("-----------------------");

for (let i = 0; i < 10; i++) {
    console.log(i)
    
}

console.log("-----------------------");

let num = [10,20,30,40,50,60,70,80,90]

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
    
}

console.log("-----------------------");

const andy = {
    nombre: "Andres",
    apellido: "Lemme",
    edad: 38
}

//para objetos
for (const propiedad in andy) {
   console.log(`key:${propiedad}, Value: ${andy[propiedad]}`)
}

console.log("-----------------------");

// mas para arrays
for (const elemento of num) {
    console.log(elemento)
}


console.log("-----------------------");

let cadena = "Hola Mundo"
for (const iterator of cadena) {
    console.log(iterator)
}
