
const ws = new WeakSet()

let valor1 = {"Valor":1}
let valor2 = {"Valor":2}
let valor3 = {"Valor":3}

ws.add(valor1)
ws.add(valor2)
ws.add(valor3)

console.log(ws)

console.log(ws.has(valor1))
console.log(ws.has(valor3))

ws.delete(valor2)
console.log(ws)

ws.add(valor2)
console.log(ws)

// setInterval(() => {
//     console.log(ws)
// }, 2000);

// setTimeout(() => {
//     valor1 = null
//     valor2 = null
//     valor3 = null
// }, 5000);

const wm = new WeakMap()

let llave1 = {}
let llave2 = {}
let llave3 = {}

wm.set(llave1, 1)
wm.set(llave2, 2)
wm.set(llave3, 3)

console.log(wm)

console.log(wm.get(llave1))
console.log(wm.get(llave2))
console.log(wm.get(llave3))

// setInterval(() => {
//     console.log(wm)
// }, 1000);

// setTimeout(() => {
//     llave1 = null
//     llave2 = null
//     llave3 = null
// }, 2000);