
const iterable = [1,2,3,4,5]
const iterable2 = "Hola Andres"
//Acedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]()
const iterador2 = iterable2[Symbol.iterator]()

console.log(iterable)
console.log(iterador)
console.log("----------")
console.log(iterable2)
// console.log(iterador2)
// console.log("----------")
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

// console.log("----------")
// console.log(iterador2.next())
// console.log(iterador2.next())
// console.log(iterador2.next())
// console.log(iterador2.next())
// console.log(iterador2.next())
// console.log(iterador2.next())
// console.log(iterador2.next())
// console.log(iterador2.next())
// console.log(iterador2.next())
// console.log(iterador2.next())
// console.log(iterador2.next())
// console.log(iterador2.next())

console.log("----------")

let next = iterador.next()

while (!next.done) {
    console.log(next.value)
    next = iterador.next()
}

console.log("----------")


let next2 = iterador2.next()

while (!next2.done) {
    console.log(next2.value)
    next2 = iterador2.next()
}