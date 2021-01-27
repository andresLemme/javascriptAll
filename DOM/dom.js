
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

// //Ya no se utilizan
// console.log(document.getElementsByTagName("li"))
// console.log(document.getElementsByClassName("card"))
// console.log(document.getElementsByName("nombre"))



// console.log(document.getElementById("menu"))
// console.log(document.querySelector("#menu"))
// console.log(document.querySelector("a"))
// console.log(document.querySelectorAll("a"))
// console.log(document.querySelectorAll("a").length)
// document.querySelectorAll("a").forEach((el) =>console.log(el))

// console.log(document.querySelector(".card"))
// console.log(document.querySelectorAll(".card")[2])
// document.querySelectorAll(".card").forEach((el) => console.log(el))

// console.log(document.querySelector("#menu li"))
// console.log(document.querySelectorAll("#menu li"))


console.log("---------------------------------")

// Atributos y data-Atrrributes

// console.log(document.documentElement.lang)
// console.log(document.documentElement.getAttribute("lang"))

// console.log(document.querySelector(".link-dom").href)
// console.log(document.querySelector(".link-dom").getAttribute("href"))

// document.documentElement.lang= "es"
// console.log(document.documentElement.lang)

// document.documentElement.setAttribute("lang", "es-MX")
// console.log(document.documentElement.lang)

// const linkDom = document.querySelector(".link-dom") 

// linkDom.setAttribute("target","_blank")
// linkDom.setAttribute("rel", "noopener")
// linkDom.setAttribute("href", "https://www.telekino.com.ar/")

// console.log(linkDom.hasAttribute("rel"))
// linkDom.removeAttribute("rel")
// console.log(linkDom.hasAttribute("rel"))

//Data-Attributes

// console.log(linkDom.getAttribute("data-description"))
// console.log(linkDom.dataset)
// console.log(linkDom.dataset.id)
// console.log(linkDom.dataset.description)

// linkDom.setAttribute("data-description", "Modelo de Objeto del Documento")
// console.log(linkDom.dataset.description)

// linkDom.dataset.description = "Quiero Ganar el telekino"

// console.log(linkDom.dataset.description)

// console.log("---------------")

//DOM Estilos y Variables CSS

const linkDom = document.querySelector(".link-dom")
console.log(linkDom.style)
console.log(linkDom.getAttribute("style"))
console.log(linkDom.style.backgroundColor)
console.log(linkDom.style.color)
console.log(window.getComputedStyle(linkDom))
console.log(getComputedStyle(linkDom).getPropertyValue("color"))

linkDom.style.setProperty("text-decoration", "none")
linkDom.style.setProperty("display", "block")
linkDom.style.textAlign = "center"
linkDom.style.marginLeft = "auto"
linkDom.style.marginRight = "auto"
linkDom.style.padding = "1rem"
linkDom.style.borderRadius = ".5rem"
console.log(getComputedStyle(linkDom))

//Variables CSS Custom Properties CSS

const htmlTest = document.documentElement;
const bodyTest = document.body;
let varDarkColor = getComputedStyle(htmlTest).getPropertyValue("--dark-color")
let varYelowColor = getComputedStyle(htmlTest).getPropertyValue("--yelow-color")
console.log(varDarkColor, varYelowColor)

bodyTest.style.backgroundColor = varDarkColor;
bodyTest.style.color = varYelowColor

htmlTest.style.setProperty("--dark-color", "pink")
varDarkColor = getComputedStyle(htmlTest).getPropertyValue("--dark-color")
bodyTest.style.setProperty("--dark-color", varDarkColor)

console.log("-----------------------")

//Clases CSS en DOM

const cardDom = document.querySelector(".card");
console.log(cardDom)
console.log(cardDom.className)
console.log(cardDom.classList.contains("rotate-45"))
cardDom.classList.add("rotate-45")
console.log(cardDom.classList.contains("rotate-45"))
console.log(cardDom.className)
console.log(cardDom.classList)
cardDom.classList.remove("rotate-45")
console.log(cardDom.classList.contains("rotate-45"))
cardDom.classList.toggle("rotate-45")
console.log(cardDom.classList.contains("rotate-45"))
cardDom.classList.toggle("rotate-45")
console.log(cardDom.classList.contains("rotate-45"))
cardDom.classList.toggle("rotate-45")
cardDom.classList.replace("rotate-45", "rotate-135")
cardDom.classList.add(".opacity-80", "sepia")
cardDom.classList.remove(".opacity-80", "sepia")
cardDom.classList.toggle(".opacity-80", "sepia")