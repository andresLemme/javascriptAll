export default function webCam(id) {
  const videoBox = document.getElementById(id);
  // console.log(navigator.mediaDevices.getUserMedia)

  //valida que esta funcion exista en el navegador que estamsos consultando, es una funcion que valida a verdadero
  // getUserMedia -> recibe una serie de parametros
  if (navigator.mediaDevices.getUserMedia) {
    //esta funcion es una promesa
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        // console.log(stream);
        videoBox.srcOlject = stream;
        videoBox.play();
      })
      .catch((err) => {
        videoBox.insertAdjacentHTML(
          "beforeBegin",
          `<p>Sucedió el siguiente error: <mark>${err}</mark></p>`
        );
        // console.log(`sucedió el siguiente error ${err}`);
      });
  }
}
