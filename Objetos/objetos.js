const b = {
    nombre: "Andres",
    apellido: "Lemme",
    edad: 38,
    pasatiempo: ["Comer", "Cocinar", "Ver series"],
    contacto:{
        email: "andreslemme@gmail.com",
        twitter: "@aflemme",
        movil: "0111531072033"
    },
    saludar: function(){
        console.log("Hola")
    },
    decirminombre:function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y mi email es: ${this.contacto.email} y mi handler de twitter es ${this.contacto.twitter}`)
    }
}
console.log(b)
console.log(`Mi nombre es ${b.nombre} y mi apellido es ${b.apellido} y mi edad es ${b.edad} años`)

console.log(b.pasatiempo)

console.log(b.contacto.email)
console.log(b.contacto.twitter)
console.log(b.contacto)

b.saludar()
b.decirminombre()


//--------------------------------------------//

console.log(Object.keys(b))
console.log(Object.values(b))
console.log(b.hasOwnProperty("nombre"))
console.log(b.hasOwnProperty("nacimiento"))