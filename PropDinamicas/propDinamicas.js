

let aleatorio = Math.round(Math.random()*100 + 5)
const objUsuario = {
    propiedad: "Valor",
    [`id_${aleatorio}`]: "Valor aleatorio"
}

console.log(objUsuario)

const usuarios = ["Andres", "Federico", "Juan", "Pedro", "Carlos"]

usuarios.forEach((usuario, index) => {
    objUsuario[`id_${index}`] = usuario
});

console.log(usuarios)