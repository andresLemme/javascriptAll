const arreglo = [];
const arreglo2 = [1, true, "Hola", ["A", "B", "C"], [1,2,3]]

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo2.length)
console.log(arreglo2[2])
console.log(arreglo2[3][2])
console.log(arreglo2[4][0])

const arreglo3 = Array.of("X", "Y", "Z", 9,8,7)
console.log(arreglo3)

const arreglo4 = Array(100).fill(false)
console.log(arreglo4)

const colores = ["Rojo", "Verde", "Azul"]
console.log(colores)

//agrega un elemento
colores.push("Negro")
console.log(colores)

//quita un elemento
colores.pop("Naranja")
console.log(colores)

colores.forEach(function(e, index) {
    console.log(`<li id="${index}">${e}</li>`)
})