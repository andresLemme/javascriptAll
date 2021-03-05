import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, Alarm } from "./reloj.js";

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
});
