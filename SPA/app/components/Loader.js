
export function Loader(){
    const $loader = document.createElement("img")

    $loader.src = "app/assets/Iphone-spinner-2.gif",
    $loader.alt = "Cargando...",

    $loader.classList.add("loader")
    return $loader;
}