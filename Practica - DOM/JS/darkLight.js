export default function darkThemes(btn, classDark) {
  const themeBtn = document.querySelector(btn);
  const $selectors = document.querySelectorAll("[data-dark]"); //aplica todo los estilos a este atributo

//   console.log($selectors);

  let sun = "☀️";
  let moon = "🌙";
  const lightMode = () =>{
    $selectors.forEach(el => {
        el.classList.remove(classDark);
        themeBtn.textContent = moon;
        localStorage.setItem("theme", "light")
    })
  };
  const darkMode = () =>{
    $selectors.forEach((el) => {
        el.classList.add(classDark);
        themeBtn.textContent = sun;
        localStorage.setItem("theme", "dark")
    })

  }

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
    //   console.log(themeBtn.textContent);
      if (themeBtn.textContent === moon) {
          darkMode()
      } else{
         lightMode();
      }
    }
  });

  document.addEventListener("DOMContentLoaded" ,(e) =>{
    //   alert("Hola desde la funcion Dark Thema")
      if(localStorage.getItem("theme") === null){ 
        localStorage.setItem("theme", "Light"); 
      }

      if(localStorage.getItem("theme") === "light"){
          lightMode()
      }

      if(localStorage.getItem("theme") === "dark"){
          darkMode()
      }
  });
}

//getItem -> obtengo el valor de una variable de LS
//setItem -> permite actualizr u obtener un valor para el LS