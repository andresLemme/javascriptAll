import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { PostCard } from "./PostCard.js";

export function Router() {
  let { hash } = location;

  console.log(hash);

  if (!hash || hash === "#/") {
    ajax({
        url: api.POSTS,
        cbSuccess: (posts) => {
          //   console.log(posts);
          let html = " ";
          posts.forEach((post) => (html += PostCard(post)));
          document.querySelector(".loader").style.display = "none";
          document.getElementById("posts").innerHTML = html;
        },
      });
  } else if (hash.includes("#/search")) {
    document.getElementById("posts").innerHTML =
      "<h2>Seccion del Buscador</h2>"
  } else if (hash === "#/contacto") {
    document.getElementById("posts").innerHTML =
      "<h2>Seccion de Contacto</h2>"
  } else {
    document.getElementById("posts").innerHTML =
      "<h2>Aqui va contenido del post seleccionado</h2>"
  }


}
