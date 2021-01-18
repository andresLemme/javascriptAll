
// Symbols crea una referencia unica, 
// se utiliza para identificar las propiedades de objetos
// funcionan como si fueran propiedadeds privadas
let id = "Hola"
let id2 = "Hola"

console.log(id === id2)

console.log("------------")

let id3 = Symbol("id3")
let id4 = Symbol("id4")

console.log(id3, id4)
console.log(typeof id3, typeof id4)

const NAME = Symbol()
const SALUDAR = Symbol()

const persona = {
    [NAME] : "Andres",
    [SALUDAR] : "Hola Andres",
    edad : 38
}

console.log(persona)

persona.NAME = "Andres Lemme"
console.log(persona)
console.log(persona.NAME)
console.log(persona[NAME])


console.log(persona)
console.log(persona.SALUDAR)
console.log(persona[SALUDAR])

console.log("-------------")

for (const propiedad in persona) {
    console.log(propiedad)
    console.log(persona[propiedad])
}

console.log(Object.getOwnPropertySymbols(persona))