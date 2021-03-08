import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./eventoTeclado.js";
import countDown from "./cuentaRegresiva.js";
import scrollTopButton from "./btn_scroll.js";

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alerma", "#esacivar-alarma");
  countDown(
  "countDown", 
  "Jun 03, 2022 18:30:00", "Feliz cumpleaños Andres!!!");
  scrollTopButton(".scroll-top-btn")
});

document.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
