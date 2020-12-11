
//POO
/*
**Clases -> Modelo a seguir

**Objeto -> Es una instancia de una clase

**Atributos -> Es una caracteristica o propiedad del objeto(son variables dentro de un objeto)

**Mètodos -> son las acciones que un objeto puede realizar (son funciones dentro de un objeto)

*/

const animal = {
    nombre: "Snoopy",
    sonar(){
        console.log("hago muchos sonidos")
    }
}

console.log(animal)


console.log("-------------")

const animal2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("hago mucho ruido")
    }
}

console.log(animal2)

console.log("-------------")

console.log("Funcion Constructura")

// //Funcion Constructura
// function Animal(nombre, genero) {

//     //atributos
//     this.nombre = nombre;
//     this.genero = genero;

//     //Métodos
//     this.sonar= function(){
//         console.log("hago mucho ruido")
//     }

//     this.saludar = function(){
//         console.log(`Hola me llamo ${this.nombre}`)
//     }
// }

// const snoopy = new Animal("Snoopy", "Macho")
// const lolaBunny = new Animal("Lola Bunny", "Hembra")
// console.log(snoopy);
// console.log(lolaBunny);

// snoopy.sonar();
// snoopy.saludar();


// lolaBunny.sonar();
// lolaBunny.saludar();


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

const snoopy = new Animal("Snoopy", "Macho")
const lolaBunny = new Animal("Lola Bunny", "Hembra")
console.log(snoopy);
console.log(lolaBunny);


snoopy.sonar();
snoopy.saludar();


lolaBunny.sonar();
lolaBunny.saludar();