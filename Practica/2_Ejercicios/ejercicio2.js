
/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const invertirCadena = (cadena="") => 
(!cadena) 
? console.warn("No ingresaste una cadena de texto")
: console.info(cadena.split("").reverse().join(""))

invertirCadena()
invertirCadena("Hola Mundo")
invertirCadena("Javascript es increible")

console.log("---------------------------------------")
/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const textoEnCadena = (cadena = "", texto = "") =>{
if (!cadena) console.warn("No ingresaste el texto largo")
if (!texto) console.warn("No ingresaste la palabra a evaluar")

let i = 0
let contador = 0

while (i !== -1) {
    i = cadena.indexOf(texto, i)
    if (i == -1){
        i++
        contador++
    }
}
return console.info(`la palabra ${texto} se repite ${contador} veces`)
}
textoEnCadena()
textoEnCadena("", "mundo")
textoEnCadena("Hola mundo, Adios mmundo", "")
textoEnCadena("Hola mundo, Adios mundo, chau mundo", "Mundo")

console.log("------------")

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const palimdromo = (texto = "") =>{
    if (!texto ) return console.error("No ingresaste ninguna palabra");

    texto = texto.toLowerCase()
    let alReves = texto.split("").reverse().join("")

    return (texto === alReves)
    ? console.info(`Si es un palindromo, Palabra original es ${texto} Palabra al reves ${alReves}`)
    : console.info(`No es un palindromo, Palabra original es ${texto} Palabra al reves ${alReves}`)
}

palimdromo()
palimdromo("Hola Mundo")
palimdromo("SaLas")
palimdromo("AmOR")


console.log("------------")




/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/


