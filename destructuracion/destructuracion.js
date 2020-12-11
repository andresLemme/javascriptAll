

const numeros = [1,2,3]

let uno = numeros[0]
dos = numeros[1]
tres = numeros[2]

console.log(uno, dos, tres)

console.log("-------------")

const [one, two, three] = numeros

console.log(one, two, three)

console.log("-------------")

const persona = {
    nombre: "Andres",
    apellido: "Lemme",
    edad: 38
}

const{nombre,apellido,edad} = persona

console.log(persona)

console.log("-------------")

console.log(nombre, apellido,edad)