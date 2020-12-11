//------ Funcoin Constructura donde asigna metodos al prototipo

function Animal(nombre, genero) {

    //atributos
    this.nombre = nombre;
    this.genero = genero;

}
//Métodos agregados al prototipo de la funcion ocnstructora
Animal.prototype.sonar= function(){
    console.log("hago mucho ruido")
}

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`)
}

// Herencia Prototipica

function Perro(nombre,genero, tamanio){
this.super = Animal;
this.super(nombre,genero);
this.tamanio = tamanio
}

//Perro esta heredando de Animal

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro

// Sobreo escritura del prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("soy un peroo y ladro")
}
Perro.prototype.ladrar = function(){
    console.log("guauu guauu")
}

const snoopy = new Perro("Snoopy", "Macho", "Mediano")
const lolaBunny = new Animal("Lola Bunny", "Hembra")
console.log(snoopy);
console.log(lolaBunny);


snoopy.sonar();
snoopy.saludar();
snoopy.ladrar()


lolaBunny.sonar();
lolaBunny.saludar();