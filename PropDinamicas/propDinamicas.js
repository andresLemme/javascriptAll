

// let aleatorio = Math.round(Math.random()*10 + 5)
// const objUsuario = {
//     propiedad: "Valor",
//     [`id_${aleatorio}`]: "Valor aleatorio",
    
    
// }

// console.log(objUsuario)

// const usuarios = ["Andres", "Federico", "Juan", "Pedro", "Carlos"]

// usuarios.forEach((usuario, index) => {
//     objUsuario[`id_${index}`] = usuario
// });

// console.log(usuarios)

console.log("-------------")


let aleatorios = Math.round(Math.random() * 10 + 5)
const objetoUsuario = {
    prop: "valor",
    [`id:${aleatorios}`] : "Hola Mundo ",

}
console.log(objetoUsuario)

const personas = ["Andres", "Jose", "Carlos", "Daniel", "Sebastian"]

personas.forEach((persona, index) => {
    objetoUsuario[`id_${index}`] = persona
});

console.log(personas)

