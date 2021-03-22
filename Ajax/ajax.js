(() => {
  const xhr = new XMLHttpRequest(); //1º instanciar el objeto http request
  const $xhr = document.getElementById("xhr");
  const $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
      // 2º asignar los eventos que se van usar de la peticion
    if (xhr.readyState !== 4) return;
    if(xhr.status >= 200 && xhr.status <300){
        // console.log("Exito")
        // console.log(xhr.responseText)
        let json = JSON.parse(xhr.responseText)
        // console.log(json)
        json.forEach(el => {
            const $li = document.createElement("li")
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
            $fragment.appendChild($li)
        });
        $xhr.appendChild($fragment)
    }else{
        // console.log("Error")
        let message = xhr.statusText || "Ocurrió un error"
        $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        
    }

    // console.log(xhr);
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); //3º abrir la peticion y establecer el metodo que se va hacer ej: GET y el recuros o URL;
  xhr.send(); //4º enviar la pteticion con el metodo send
})();
