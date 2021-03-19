export default function contactFormValidation() {
    const $form = document.querySelector(".contact-form")
    const $inputs = document.querySelectorAll(".contact-form [required]")
    console.log($inputs)

    $inputs.forEach(input => {
        const $span = document.createElement("span")
        $span.id = input.name
        $span.textContent = input.title
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)
    });

    document.addEventListener("keyup", (e) =>{
        if (e.target.matches(".contact-form [required]")) {
            let pattern = e.target.pattern ||  e.target.dataset.pattern //dataset se guardan todos los attributes
            // console.log(e.target.pattern, pattern)
            if (pattern && e.target.value !== "") {
                console.log("El imput tiene patron")
                let regex = new RegExp(pattern)
                return !regex.exec(e.target.value)
                ?document.getElementById(e.target.name).classList.add("is-active")
                :document.getElementById(e.target.name).classList.remove("is-active")
            }
            if (!pattern) {
                console.log("El imput NO tiene patron")
                return e.target.value === ""
                ?document.getElementById(e.target.name).classList.add("is-active")
                :document.getElementById(e.target.name).classList.remove("is-active")
                
            }
        }
    })
}