const saludo = function() {
    console.log("Hola")
}

saludo()

console.log("---------------")
const saludar = ()=> {
    console.log("Hola arrow function")
}

saludar()

console.log("--------------")
const saludar1 = ()=> console.log("Hola arrow function sin flechas")

saludar1()

console.log("------------")

const saludar2 = nombre => console.log(`Hola ${nombre}`)

saludar2("Irma")

console.log("------------")

const suma = (a,b) => a + b;
console.log(suma(9,9))

console.log("------------")

const variasLineas = () =>{
    console.log("uno")
    console.log("dos")
    console.log("tres")
}
variasLineas()

console.log("------------")

const numeros = [1,2,3,4,5]

numeros.forEach((el, index)=> console.log(`${el} esta en la posicion ${index}`)
)


console.log("------------")

function Perro() {
    console.log(this)
}
Perro()

console.log("------------")

const perro = {
    nombre: "Andres",
    ladrar: function() {
        console.log(this)
    }
}
perro.ladrar()


console.log("------------")

const perroo = {
    nombre: "Andres",
    ladrar() {
        console.log(this)
    }
}
perroo.ladrar()