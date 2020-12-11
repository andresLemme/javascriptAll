let estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'],
  ol = `<ol>
    ${
      estaciones.map(function (estacion) {
        return `# ${estacion}`;
      }).join('')
    }
  </ol>`;

console.log(ol);


//---------------------------------------------------------------------//


const etiqueta = function (cadena, variable){
    console.log(cadena);
    console.log(variable);
    console.log(cadena[0] + variable )
}

let otroNombre = 'Ulises';

etiqueta`hola ${otroNombre}`


//---------------------------------------------------------------------//

//antes

var saludo = function (nombre){
    return 'Hola ' + nombre;
}

console.log(saludo ('Andres'))

//Ahora

let saludos = nombre => `Hola ${nombre}`

console.log(saludos ('Andressss'));

let SaludosDos = (nombre) =>
    `Hola ${nombre}`


console.log(SaludosDos ('Federico'))


//---------------------------------------------------------------------//

let nombre = 'andres';
let apellido = 'lemme';

let saludoss = 'Hola mi nombre es ' + ' ' + nombre + ' ' + apellido

console.log(saludoss)

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}`

console.log(saludo2)

let estacion = `<ul>
  <li>Primavera</li>
  <li>Verano</li>
  <li>Otoño</li>
  <li>Invierno</li>
</ul>`
console.log(estacion)

// tipo de datos numericos

let a = 5;
let b = new Number(2);
let c = 7.19
let d = "5.6"

console.log(a,b);
console.log(c.toFixed(1))
console.log(parseInt(c))
console.log(parseFloat(c))
console.log(typeof c, typeof d)
console.log(c + parseInt(d))
console.log(c + parseFloat(d))

console.log(c + Number.parseInt(d))
console.log(c + Number.parseFloat(d))


// Valores Booleanos

let verdadero = true;
let falso = false

console.log(verdadero, falso)
console.log(typeof verdadero, typeof falso)

// NULL - undefined - NaN

let indefinida;
console.log(indefinida)

let nulo = null
console.log(null)

let notANumber = "hola" * 123;
console.log(notANumber)









