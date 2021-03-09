import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./eventoTeclado.js";
import countDown from "./cuentaRegresiva.js";
import scrollTopButton from "./btn_scroll.js";
import darkThemes from "./darkLight.js";

document.addEventListener("DOMContentLoaded", (e) => { //espera a tener el arbol del DOM cargado para que funcione // Windown sw tiene que cargar todo para que funciones. CSS js etc!! 
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alerma", "#esacivar-alarma");
  // countDown(
  // "countDown", 
  // "Jun 03, 2022 18:30:00", 
  // "Feliz cumpleaños Andres!!!");
  scrollTopButton(".scroll-top-btn");
  
});

document.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkThemes(".dark-theme-btn", "dark-mode");