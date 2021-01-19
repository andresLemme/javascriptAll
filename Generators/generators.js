
function* iterable() {
    yield "hola"
    console.log("hola consola")
    yield "hola 2"
    console.log("seguimos ocn mas intrucciones")
    yield "hola 3"
    yield "hola 4"
}

let iterador = iterable()

// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

console.log("-----------")

for (let y  of iterador) {
    console.log(y)
}

const arr = [...iterable()]
console.log(arr)

console.log("-----------")
 
function cuadrado(valor) {
    setTimeout(() => {
     console.log({valor, resultado:valor*valor})   
    }, Math.random()*1000);
    return{
        valor,
        resultado:valor*valor
    }
}

function* Generador() {
    console.log("Inicia Generator")
    yield cuadrado(0)
    yield cuadrado(1)
    yield cuadrado(2)
    yield cuadrado(3)
    yield cuadrado(4)
    yield cuadrado(5)
    console.log("Termina Generator")
}

let gen = Generador()

for (let y of gen) {
    
}