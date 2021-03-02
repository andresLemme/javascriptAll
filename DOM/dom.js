// Introduccion DOM

console.log("-------- Elemento del DOM-------");

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

console.log("---------------------------------");

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

// const linkDom = document.querySelector(".link-dom");
// console.log(linkDom.style);
// console.log(linkDom.getAttribute("style"));
// console.log(linkDom.style.backgroundColor);
// console.log(linkDom.style.color);
// console.log(window.getComputedStyle(linkDom));
// console.log(getComputedStyle(linkDom).getPropertyValue("color"));

// linkDom.style.setProperty("text-decoration", "none");
// linkDom.style.setProperty("display", "block");
// linkDom.style.textAlign = "center";
// linkDom.style.marginLeft = "auto";
// linkDom.style.marginRight = "auto";
// linkDom.style.padding = "1rem";
// linkDom.style.borderRadius = ".5rem";
// console.log(getComputedStyle(linkDom));

//Variables CSS Custom Properties CSS

// const htmlTest = document.documentElement;
// const bodyTest = document.body;
// let varDarkColor = getComputedStyle(htmlTest).getPropertyValue("--dark-color");
// let varYelowColor = getComputedStyle(htmlTest).getPropertyValue(
//   "--yelow-color"
// );
// console.log(varDarkColor, varYelowColor);

// bodyTest.style.backgroundColor = varDarkColor;
// bodyTest.style.color = varYelowColor;

// htmlTest.style.setProperty("--dark-color", "pink");
// varDarkColor = getComputedStyle(htmlTest).getPropertyValue("--dark-color");
// bodyTest.style.setProperty("--dark-color", varDarkColor);

console.log("-----------------------");

//Clases CSS en DOM

// const cardDom = document.querySelector(".card");
// console.log(cardDom)
// console.log(cardDom.className)
// console.log(cardDom.classList.contains("rotate-45"))
// cardDom.classList.add("rotate-45")
// console.log(cardDom.classList.contains("rotate-45"))
// console.log(cardDom.className)
// console.log(cardDom.classList)
// cardDom.classList.remove("rotate-45")
// console.log(cardDom.classList.contains("rotate-45"))
// cardDom.classList.toggle("rotate-45")
// console.log(cardDom.classList.contains("rotate-45"))
// cardDom.classList.toggle("rotate-45")
// console.log(cardDom.classList.contains("rotate-45"))
// cardDom.classList.toggle("rotate-45")
// cardDom.classList.replace("rotate-45", "rotate-135")
// cardDom.classList.add(".opacity-80", "sepia")
// cardDom.classList.remove(".opacity-80", "sepia")
// cardDom.classList.toggle(".opacity-80", "sepia")

//DOM Texto y HTML

const whatIsDOM = document.getElementById("que-es");

let texto = `
<p>El modelo de Objetos del Documento (DOM) es una APis para documentos HTML y XML</p>
<p>Este proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código Js</p>
<p><mark>El DOM no es parte de las especificaciones de JAvaScript, es una API para los navegadores</mark></p>
`;

// whatIsDOM.innerText = texto ---> no se usa!!
whatIsDOM.textContent = texto;
whatIsDOM.innerHTML = texto;
whatIsDOM.outerHTML = texto;

//DOM Traversing : Recorriendo el DOM

const cardss = document.querySelector(".cards");

console.log(cardss);
console.log(cardss.children);
console.log(cardss.childNodes);
console.log(cardss.children[2]);

console.log(cardss.parentElement);
console.log(cardss.parentNode);

console.log(cardss.firstChild);
console.log(cardss.firstElementChild);
console.log(cardss.lastElementChild);

console.log(cardss.previousSibling);
console.log(cardss.previousElementSibling);

console.log(cardss.nextSibling);
console.log(cardss.nextElementSibling);

console.log(cardss.closest("div"));
console.log(cardss.closest("body"));
console.log(cardss.children[3].closest("section"));

// Creando elementos y fragmentos

//Elementos

// const figureCard = document.createElement("figure");
// const imgCard = document.createElement("img");
// const figCaption = document.createElement("figcaption");
// const figCaptionText = document.createTextNode("Animals");
// const cards = document.querySelector(".cards");

// imgCard.setAttribute("src", "https://placeimg.com/200/200/animals");
// imgCard.setAttribute("alt", "Animals");
// figureCard.classList.add("card");

// figCaption.appendChild(figCaptionText);

// figureCard.appendChild(imgCard), figureCard.appendChild(figCaption);
// cards.appendChild(figureCard);

// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
// const ulSec = document.createElement("ul");

// document.write("<h3>Estaciones del año</h3>");
// document.body.appendChild(ulSec);

// document.body.appendChild(ulSec);

// estaciones.forEach((el) => {
//   const list = document.createElement("li");
//   (list.textContent = el), ulSec.appendChild(list);
// });

// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
// const desList = document.createElement("ul");

// document.write("<h3>Meses del año</h3>");
// document.body.appendChild(desList);

// meses.forEach((element) => {
//   const lista2 = document.createElement("li");
//   lista2.textContent = element;
//   desList.appendChild(lista2);
// });

// const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"];
// const ul3 = document.createElement("ul");

// document.write("<h3>Continentes del Mundo</h3>");
// document.body.appendChild(ul3);
// ul3.innerHTML = "";
// continentes.forEach((el) => (ul3.innerHTML += `<li>${el}</li>`));

// const continentes2 = ["Africa", "America", "Asia", "Europa", "Oceania","Africa", "America", "Asia", "Europa", "Oceania","Africa", "America", "Asia", "Europa", "Oceania","Africa", "America", "Asia", "Europa", "Oceania","Africa", "America", "Asia", "Europa", "Oceania","Africa", "America", "Asia", "Europa", "Oceania","Africa", "America", "Asia", "Europa", "Oceania","Africa", "America", "Asia", "Europa", "Oceania","Africa", "America", "Asia", "Europa", "Oceania","Africa", "America", "Asia", "Europa", "Oceania","Africa", "America", "Asia", "Europa", "Oceania","Africa", "America", "Asia", "Europa", "Oceania","Africa", "America", "Asia", "Europa", "Oceania"];
// const ul4 = document.createElement("ul")

// document.write("<h3>De nuevo los continentes</h3>")
// document.body.appendChild(ul4)
// ul4.innerHTML = ""
// continentes2.forEach(el => (ul4.innerHTML += `<li>${el}</li>`))


//Fragmentos

const meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
const ul5 = document.createElement("ul")
const fragmentt = document.createDocumentFragment()
meses2.forEach((el) => {
    const lis2 = document.createElement("li")
    lis2.textContent = el
    fragmentt.appendChild(lis2)
})
document.write("<h3>Meses del año con Fragmento</h3>")
ul5.appendChild(fragmentt)
document.body.appendChild(ul5)
console.log("-----Template------")

//Template
const cardsTemplate = document.querySelector(".cards")
const template = document.getElementById("template-card").content
const fragmentto = document.createDocumentFragment()
cardContent = [
    {
        title: "Tecnología",
        img: "https://placeimg.com/200/200/tech",
      },
      {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals",
      },
      {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",
      },
      {
        title: "Gente",
        img: "https://placeimg.com/200/200/people",
      },
      {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature",
      },
]

cardContent.forEach((el) =>{
    template.querySelector("img").setAttribute("src",el.img)
    template.querySelector("img").setAttribute("alt", el.title)
    template.querySelector("figcaption").textContent = el.title

    let clone = document.importNode(template, true)

    fragmentto.appendChild(clone)
})

cardsTemplate.appendChild(fragmentto)


// Modificando elementos (cool Style)

/*
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)
Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

// Manejadores de eventos

function holaMundo() {
  alert("Hola Mundo")
  console.log(e)
}

function saludar(nombre = "Desconocido") {
  alert(`Hola ${nombre} `)
  console.log(event)
}

//Evento semantico
const btn = document.getElementById("eventoSemantico")
btn.onclick = holaMundo
btn.onclick = function (e) {
  alert("Hola Mundo manejador de evento semantico")
  console.log(e)
  console.log(event)
}

// madejadores multiples
const btn2 = document.getElementById("eventoMultiple")
btn2.addEventListener("click",holaMundo)
btn2.addEventListener("click", (e) =>{
  alert("Hola Mundo Manejador de eventos")
  console.log(e)
  console.log(e.target)
  console.log(e.type)
  console.log(event)

})

console.log("-----------------------------------")

// Eventos con parametros & Remover eventos

//sin parametros
btn2.addEventListener("click", saludar)

//pasando parametros a un evento -
btn2.addEventListener("click", () =>{
  saludar(),
  saludar("Andres")
})

//REmover eventos de un elemento

const eventRemove = document.getElementById("eventoRemover")
const removerdclick = (e) =>{
  alert(`Removiendo el evento ${e.type}`)
  console.log(e)
  eventRemove.removeEventListener("dblclick", removerdclick) 
  eventRemove.disable = true 
 }
eventRemove.addEventListener("dblclick", removerdclick )

//Flujo de eventos

function flujoEventos(e){
  console.log(`Hola te saluda ${this} el click que lo originó ${e.target.className}`)
  // e.stopPropagation()
}

// const divsEventos = document.querySelectorAll(".eventos-flujo div")
// const linkEvento = document.querySelector(".eventos-flujo a")
// console.log(divsEventos)

// divsEventos.forEach(div =>{
//   //Fase burbuja
//   //genera una captura de de afuera hacia adentro, sepuedo agregar false pero por defecto lo toma
//   div.addEventListener("click", flujoEventos)

//   //Fase captura
//   ////genera una captura de adentro hacia afuera
//   // div.addEventListener("click", flujoEventos, true)
// //   div.addEventListener("click", flujoEventos,{
// //     capture: true,
// //     once: true
// //   })
// })


// stopPropagation y preventDefault

// linkEvento.addEventListener("click", (e) =>{
//   alert("Hola Soy Andres!!!")
//   //cancela por defecto el comportamiento los elmentos del DOM
//   // e.preventDefault()
//   // e.stopPropagation()
 

// })

// Delegacion de eventos

document.addEventListener("click", (e) =>{
  console.log("le diste click", e.target)
  //matches -> busca un selector valido
  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola Soy Andres!!!")
    e.preventDefault() 
  }
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e)
  }
})