
// Introduccion DOM

console.log("-------- Elemento del DOM-------")

// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.doctype)
// console.log(document.charset)
// console.log(document.title)
// console.log(document.links)
// console.log(document.images)
// console.log(document.forms)
// console.log(document.styleSheets)
// console.log(document.scripts)
// setTimeout(() =>{
//     console.log(document.getSelection().toString())

// }, 2000)

// document.write("<h2>Hola Mundo</h2>")

//Clase 2 DOM
//nodos - elementos y selectores

//Ya no se utilizan
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))



console.log(document.getElementById("menu"))
console.log(document.querySelector("#menu"))
console.log(document.querySelector("a"))
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)
document.querySelectorAll("a").forEach((el) =>console.log(el))

console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card")[2])
document.querySelectorAll(".card").forEach((el) => console.log(el))

console.log(document.querySelector("#menu li"))
console.log(document.querySelectorAll("#menu li"))


console.log("---------------------------------")

// Atributos y data-Atrrributes

console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))

console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

document.documentElement.lang= "es"
console.log(document.documentElement.lang)

document.documentElement.setAttribute("lang", "es-MX")
console.log(document.documentElement.lang)

const linkDom = document.querySelector(".link-dom") 

linkDom.setAttribute("target","_blank")
linkDom.setAttribute("rel", "noopener")
linkDom.setAttribute("href", "https://www.telekino.com.ar/")

console.log(linkDom.hasAttribute("rel"))
linkDom.removeAttribute("rel")
console.log(linkDom.hasAttribute("rel"))

//Data-Attributes

console.log(linkDom.getAttribute("data-description"))
console.log(linkDom.dataset)
console.log(linkDom.dataset.id)
console.log(linkDom.dataset.description)

linkDom.setAttribute("data-description", "Modelo de Objeto del Documento")
console.log(linkDom.dataset.description)

linkDom.dataset.description = "Quiero Ganar el telekino"

console.log(linkDom.dataset.description)