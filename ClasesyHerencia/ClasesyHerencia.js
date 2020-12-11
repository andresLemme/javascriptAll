class Animal{
    constructor(nombre, genero){

        // atributos
        this.nombre = nombre
        this.genero = genero
    }

    //Metodos
    sonar () {
        console.log("Hago sonidos porque toy vivo")
    }

    saludar () {
        console.log(`Hola me llamo ${this.nombre}`)
    }

    
}

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre,genero)
        this.tamanio = tamanio
    }
    sonar () {
        console.log("Soy un perro y hago ladridos")
    }
    ladrar (){
        console.log("guauu guauuu")
    }

}

const mimi = new Animal ("Mimi", "Hembra")
const scooby = new Perro ("Scooby", "Macho", "Gigante")

console.log("--------------------")

console.log(mimi)
console.log(scooby)

console.log("--------------------")

mimi.sonar()
mimi.saludar()

console.log("--------------------")

scooby.sonar()
scooby.saludar()
scooby.ladrar()