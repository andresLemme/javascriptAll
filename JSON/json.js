
//JSON JavaScript Object Notation

const json = {
    cadena: "Andres",
    numero: 39,
    booleano: true,
    arreglo: ["estudiar", "andar en bici", "cocinar", "ser Felizzz"],
    objeto:{
        twitter: "@aflemme",
        email: "andres.lemme@gmail.com",
    },
    nulo: null
}
console.log(json)
console.log(JSON)
console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3,4]"))
console.log(JSON.parse("19"))
console.log(JSON.parse("true"))
console.log(JSON.parse("false"))
console.log(JSON.parse("null"))

console.log("-------------")

console.log(JSON.stringify({}))
console.log(JSON.stringify([1,2,3,4]))
console.log(JSON.stringify(true))
console.log(JSON.stringify(false))
console.log(JSON.stringify(null))
console.log(JSON.stringify({x:2, y:4}))
console.log(JSON.stringify(json))
console.log(JSON.parse('{"cadena": "Andres","numero": "39","booleano": "true","arreglo": ["estudiar", "andar en bici", "cocinar", "ser Felizzz"],"objeto":{"twitter": "@aflemme","email": "andres.lemme@gmail.com"},"nulo": null}'))
