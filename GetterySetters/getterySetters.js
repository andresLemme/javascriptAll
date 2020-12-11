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
        this.raza = null
    }
     sonar () {
        console.log("Soy un perro y hago ladridos")
    }
    ladrar (){
        console.log("guauu guauuu")
    }

    static queEres(){
        console.log("los perros somos animales mamiferos que pertenecemos a la famila de los caninos")
    }

    get getRaza(){
        return this.raza
    }

    set setRaza(raza){
       this.raza = raza
    }

}

Perro.queEres()

//un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase

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


console.log("----Getter y Setter------")

console.log(scooby.getRaza)
scooby.setRaza = "Gran Danes"
console.log(scooby.getRaza)