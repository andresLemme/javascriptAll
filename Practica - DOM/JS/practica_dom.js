import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./eventoTeclado.js";
import countDown from "./cuentaRegresiva.js";
import scrollTopButton from "./btn_scroll.js";
import darkThemes from "./darkLight.js";
import responsiveMedia from "./objetos_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import deviceInfo from "./deteccionDispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webCam.js";
import getGeoLocation from "./Geolocalizacion.js";
import searchFilter from "./FiltroBusqueda.js";
import draw from "./Sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./VideoInteligente.js";
import contactFormValidation from "./validacionesFormulario.js";
import speechReader from "./narador.js";


document.addEventListener("DOMContentLoaded", (e) => { //espera a tener el arbol del DOM cargado para que funcione // Windown sw tiene que cargar todo para que funciones. CSS js etc!! 
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alerma", "#esacivar-alarma");
  // countDown(
  // "countDown", 
  // "Jun 03, 2022 18:30:00", 
  // "Feliz cumpleaños Andres!!!");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia("youTube", 
  "(min-width:1024px)", 
  `<a href="https://www.youtube.com/watch?v=ns8-5XKA0Ww" target="_blank" rel="noopener noreferrer">Ver video</a>`, 
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/ns8-5XKA0Ww" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`),
  responsiveMedia("gmaps", 
  "(min-width:1024px)", 
  `<a href="https://goo.gl/maps/DUrkYBcFqn8Y5jqc6" target="_blank" rel="noopener noreferrer">Ver mapa</a>`,  
  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.005310526414!2d-58.458272684771096!3d-34.57873218046588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5ddf4658e3f%3A0x58bc6d82c77c7e4d!2sAv.%20%C3%81lvarez%20Thomas%201007%2C%20C1427%20CCK%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1615400717879!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`),
  responsiveTester("resposive-tester"),
  deviceInfo("user-device"),
  webCam("webCam"),
  getGeoLocation("geoLocation"),
  searchFilter(".card-filter", ".card"),
  draw("#winner-btn", ".player"),
  slider(),
  scrollSpy(),
  smartVideo(),
  contactFormValidation()
});

document.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkThemes(".dark-theme-btn", "dark-mode");
networkStatus(),
speechReader()