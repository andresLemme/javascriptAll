
let mapa = new Map()

mapa.set("nombre", "Andres")
mapa.set("apellido", "Lemme")
mapa.set("edad", 38)

console.log(mapa)
console.log(mapa.size)
console.log(mapa.has("correo"))
console.log(mapa.has("apellido"))
console.log(mapa.get("nombre"))
mapa.set("nombre", "Federico Lemme")
console.log(mapa.get("nombre"))


mapa.set("numero", "veinte")
mapa.set("otro numero", 21)
console.log(mapa)

for ([key, value] of mapa) {
    console.log(`Llave: ${key} Valor:${value}`)
}

const mapa2 = new Map([
    ["nombre", "Mia"],
    ["edad", 7],
    ["animal", "perro"],
    [null, "nulo"]
])

console.log(mapa2)
for ([key, value] of mapa2) {
    console.log(`llave: ${key} - Valor: ${value}`)
    
}

const llaveMapa2 = [...mapa2.keys()]
const valoresMapa2 = [...mapa2.values()]

console.log(llaveMapa2)
console.log(valoresMapa2)