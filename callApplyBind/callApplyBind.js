console.log(this)

this.lugar = "Contexto Global"

function saludar(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
}

saludar("hola", "Salamin")

const obj = {
    lugar: "Contexto Objeto"
}

saludar.call(obj, "Hola", "Andres")
saludar.call(null, "Hola", "Andres") // toma el contexto global
saludar.apply(obj, ["Adios", "Andres Lemme"]) //se pasa con corchetes
saludar.apply(null, ["Adios", "Andres Lemme"]) 
saludar.apply(this, ["Adios", "Andres Lemme"])// ambos tmb toma el contexto global

console.log("--------------")

this.nombre = "windows"
const persona = {
    nombre: "Andres",
    saludar: function() {
        console.log(`Hola ${this.nombre}`)
    }
}
persona.saludar()

const otraPersona = {
    saludar: persona.saludar.bind(this)
}

otraPersona.saludar()



