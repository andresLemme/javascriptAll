export default function darkThemes(btn, classDark) {
  const themeBtn = document.querySelector(btn);
  const $selectors = document.querySelectorAll("[data-dark]"); //aplica todo los estilos a este atributo

  console.log($selectors);

  let sun = "☀️";
  let moon = "🌙";

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      console.log(themeBtn.textContent);
      if (themeBtn.textContent === moon) {
        $selectors.forEach((el) => {
          el.classList.add(classDark);
          themeBtn.textContent = sun
        } 
        );
      } else{
        $selectors.forEach(el => {
            el.classList.remove(classDark);
            themeBtn.textContent = moon;
        });
      }
    }
  });
}
