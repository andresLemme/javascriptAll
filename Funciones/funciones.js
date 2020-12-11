// Funciones
/*Se define una sola vez y reutilizar las veces necesarias, puede o no recibir parametros, puede devolver valores o noo
son consideradas objetos tmb.*/

//Funciones Declaradas
// function esUnaFuncion(){
// console.log("uno")
// console.log("dos")
// console.log("tres")
// }

// function devuelveValor(){
//     console.log("uno")
//     console.log("dos")
//     console.log("tres")
//     return("Probando funciones")
// }
// let retornoValor =  devuelveValor()
// console.log(retornoValor)

//invocacion de funcion
// esUnaFuncion()
// esUnaFuncion()
// esUnaFuncion()

function Saludar(nombre = "Desconocido", edad = 0){
console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}
Saludar("Andres", 38)
Saludar()

funcionDeclarada()
function funcionDeclarada(){
    console.log("es una funcion declarada y puede invocarse en cualquier parte del codigo incluso antes de la funcion sea declarada")
}
funcionDeclarada()

// funcionExpresada()



//Funciones expresadas

//funcion anonima
const funcionExpresada = function(){
console.log("esto es una funcion expresada que se le asigna un valor a una variable, si se invoca esta funcion antes de su definicion js nos dira: Uncaught ReferenceError: Cannot access 'funcionExpresada' before initialization")
}
funcionExpresada()
