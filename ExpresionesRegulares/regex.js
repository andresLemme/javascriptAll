
let  cadena = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 123 It has"

let expreg = new RegExp("lorem", "ig")
let expreg2 = /Lorem{1}/ig

// console.log(expreg.test(cadena))
// console.log(expreg.exec(cadena))

console.log("------------")

console.log(expreg2.test(cadena))
console.log(expreg2.exec(cadena))