import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Title } from "./components/Title.js";
import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { PostCard } from "./components/PostCard.js";

export function App() {
  const $root = document.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Posts());
  $root.appendChild(Loader());

  ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {
      console.log(posts);
      let html = ""
      posts.forEach((post) => html += PostCard(post));
      document.querySelector(".loader").style.display = "none";
      document.getElementById("posts").innerHTML = html 

    },
  });

  //   document.getElementById(
  //     "root"
  //   ).innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla Js</h1>`;
  //   ajax({
  //     url: api.POST,
  //     cbSuccess: (posts) => {
  //       console.log(posts);
  //     },
  //   });

  //   ajax({
  //       url: api.CATEGORIES,
  //       cbSuccess: (categories)=>{
  //           console.log(categories)
  //       }
  //   })

  //   console.log(api);
}
