export function Menu(){
    const $menu = document.createElement("nav")
    $menu.classList.add("menu")
    $menu.innerHTML = `
    <a href="#/">Home</a>
    <span></span>
    <a href="#/search">Search</a>
    <span></span>
    <a href="#/http://www.teinvito.com.ar/" target="_blank" rel="noopener">Teinvito</a>
    <span></span>
    `
    
    return $menu
}