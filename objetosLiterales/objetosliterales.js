let nombre = "Mia",
    edad = 10

    const perro = {
        nombre: nombre,
        edad: edad,
        ladrar: function () {
            console.log("guauu guauuu")
        }
    }

console.log(perro)
perro.ladrar()

const dog = {
    nombre,
    edad,
    ladrar(){
        console.log("ladrnado")
    }
}
console.log(dog)
dog.ladrar()