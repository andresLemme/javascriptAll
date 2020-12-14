console.log(console)
console.error("esto es un error")
console.warn("esto es un aviso")
console.info("Holaa info")

const nombre = "Andres"
apellido = "lemme"
edad = 38

console.log(nombre, apellido, edad)
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)

console.log(`Hola mi nombre es %s %s y tengo %s años`, nombre, apellido, edad)

console.clear()

console.log(window)

console.log(document)

console.dir(window)

console.dir(document)

console.clear()

console.log("-------------")
console.groupCollapsed("Los cursos de Youtube")
console.log("Cuso de Js")
console.log("Curso de NOde js")
console.groupEnd()

console.log("-------------")

console.table(Object.entries(console).sort())

console.log("-------------")

const numero = [1,2,3,4,5];
const vocales = ["a","e","i","o","u"]
console.table(numero)
console.table(vocales)

console.log("-------------")

const perro ={
    nombre: "Boonny",
    raza: "Boxer",
    color: "cafe"
}
console.table(perro)

console.log("-------------")

console.time("Cuanto tiempo demora?")
const arreglo = Array(100000)

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i]= i;
    
}
console.timeEnd("Cuanto tiempo demora?")

// console.log(arreglo)

console.log("-------------")


for (let i = 0; i <=100 ; i++) {
    console.count("codigo for")
    console.log(i)
    
}

let x = 3
let y = 2
let pruebaXY = "Se espera que X sea menor"

console.assert(x<y, x,y, pruebaXY)
