
console.log(this)
console.log(window)
console.log(this === window)

//Contexto Global
this.nombre = "Contexto Global"

console.log(this.nombre)

function imprimir() {
    console.log(this.nombre)
}

imprimir()

console.log("---------")

// Contaxto Objeto

const obj = {
    nombre:"Contexto Objeto",
    imprimir: function() {
        console.log(this.nombre)
    }
}
obj.imprimir()

console.log("---------")

const obj2 = {
    nombre: "Contexto Objeto 2",
    imprimir: imprimir
}
obj2.imprimir()


console.log("---------")

// mantiene un enlace del contexto donde fue creado osea del padre
//no crea un scope sino que toma el global
const obj3 = {
    nombre: "Contexto global 3",
    imprimir: () =>{
        console.log(this.nombre)
    }
}

obj3.imprimir()


console.log("---------")

function persona(nombre) {
    this.nombre = nombre
    // return console.log(this.nombre)
    // return function() {
    //     console.log(this.nombre)
    // }
    return () => console.log(this.nombre)
}
let Andres = new persona("Andres")
Andres()
