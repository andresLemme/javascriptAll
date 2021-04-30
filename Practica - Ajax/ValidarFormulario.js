function contactForm() {
    const $form = document.querySelector(".contact-form");
    const $inputs = document.querySelectorAll(".contact-form [required]");
    // console.log($inputs);
  
    $inputs.forEach((input) => {
      const $span = document.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none");
      input.insertAdjacentElement("afterend", $span);
    });
  
    document.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let pattern = e.target.pattern || e.target.dataset.pattern; //dataset se guardan todos los attributes
        // console.log(e.target.pattern, pattern)
        if (pattern && e.target.value !== "") {
          // console.log("El imput tiene patron");
          let regex = new RegExp(pattern);
          return !regex.exec(e.target.value)
            ? document.getElementById(e.target.name).classList.add("is-active")
            : document
                .getElementById(e.target.name)
                .classList.remove("is-active");
        }
        if (!pattern) {
          // console.log("El imput NO tiene patron");
          return e.target.value === ""
            ? document.getElementById(e.target.name).classList.add("is-active")
            : document
                .getElementById(e.target.name)
                .classList.remove("is-active");
        }
      }
    });
  
    document.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Enviando formulario");
  
      const $loarder = document.querySelector(".contact-form-loader");
      const $response = document.querySelector(".contact-form-response");
  
      $loarder.classList.remove("none");
      
      fetch("https://formsubmit.co/ajax/andres.lemme@gmail.com", {
        method: "POST",
        body: new FormData(e.target)

      })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(json =>{
        console.log(json)
        $loarder.classList.add("none");
           $response.classList.remove("none");
           $response.innerHTML = `<p>${json.message}</p>`
           $form.reset();
      })
      .catch(err => {
        console.log(err)
        let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente"
        $response.innerHTML = `<p>Error ${err.status} : ${message}</p>`
      })
      .finally(() => {
           setTimeout(() => {
             $response.classList.add("none");
             $response.innerHTML= ""
           }, 3000)
         })

    
      // setTimeout(() => {
        
      });
  }
  document.addEventListener("DOMContentLoaded", contactForm)