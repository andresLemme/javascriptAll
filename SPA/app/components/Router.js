import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";

export async function Router() {
  let { hash } = location;

  // console.log(hash);

  if (!hash || hash === "#/") {
    await ajax({
        url: api.POSTS,
        cbSuccess: (posts) => {
            // console.log(posts);
          let html = " ";
          posts.forEach((post) => (html += PostCard(post)));
          // document.querySelector(".loader").style.display = "none";
          document.getElementById("posts").innerHTML = html;
        },
      });
      // console.log(api.POST)
  } else if (hash.includes("#/search")) {
    document.getElementById("posts").innerHTML =
      "<h2>Seccion del Buscador</h2>"
  } else if (hash === "#/contacto") {
    document.getElementById("posts").innerHTML =
      "<h2>Seccion de Contacto</h2>"
  } else {  
      await ajax({
        url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
        cbSuccess: (post) => {
           console.log(post);
           document.querySelector("post-page").innerHTML = Post(post)
          
        },
      });
  }
  document.querySelector(".loader").style.display = "none";

}
