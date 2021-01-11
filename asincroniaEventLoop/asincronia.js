/*
Procesamiento Single Thread y Multi thread
Operaciones de CPU y Operaciones de I/O
Operaciones de Concurrentes y Paralelas
Operaciones Bloqueantes y No bloqueantes
Operaciones Sincronas y   Asincronas

Javascript usa un modelo asincrono y no bloqueante con
un loop de eventos implementado en un solo hilo
(single thread) para operaciones de entrada y salida (input/output)
*/

/* Código Síncrono Bloquenate */

(() => {
  console.log("Codigo Sincrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");

    dos();
    console.log("tres");
  }
  uno();
  console.log("fin");
})();

// console.log("####################")
  /* Código Asinncrono No Bloquenate */

  (() => {
      console.log("Codigo Asincrono")
      console.log("Inicio")

      function dos() {
          setTimeout(function(){
              console.log("Dos")
          }, 1000)
      }

      function uno() {
          setTimeout(function(){
              console.log("Uno")
          }, 0)
          dos()
          console.log("tres")
      }

      uno()
      console.log("Fin")
  })()
