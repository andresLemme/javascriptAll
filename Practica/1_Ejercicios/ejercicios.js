/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

//Funcion declarada

function NumCarecter(cadena = "") {
    if (!cadena) {
      console.warn("No ingresaste ninguna cadena");
    } else {
      console.info(`la cadena "${cadena}" tiene "${cadena.length}" caracteres`);
    }
  }
  NumCarecter();
  NumCarecter("Andres");
  
  console.log("-------------------");
  
  //Funcion expresada -> sin llaves
  
  const ContarCaracteres = () =>
    !cadena
      ? console.warn("No ingresaste ninguna cadena")
      : console.info(`la cadena "${cadena}" tiene "${cadena.length}" caracteres`);
  
  NumCarecter();
  NumCarecter("Andres Lemme");
  
  console.log("-------------------");
  const ContarCaracteres2 = () => {
    return !cadena
      ? console.warn("No ingresaste ninguna cadena")
      : console.info(`la cadena "${cadena}" tiene "${cadena.length}" caracteres`);
  };
  NumCarecter();
  NumCarecter("Andres Federico Lemme");
  
  console.log("-------------------");
  
  /*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
  
  const recortarTexto = (cadena = "", longitud = undefined) =>
    !cadena
      ? console.warn("No ingresaste ninguna cadena de texto")
      :(longitud === undefined)
      ? console.warn("No ingresaste ninguna longitud para recortar texto")
      : console.info(cadena.slice(0, longitud));
  
  recortarTexto("Hola Mundo", 4);
  recortarTexto();
  recortarTexto("Hola HOla");
  recortarTexto("", 5);
  
  console.log("-------------------");
  
  
  /*3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */
  
  const cadenaArreglo = (cadena = "", separador = undefined) =>
  (!cadena)
  ? console.warn("No ingresaste ninguna cadena de texto")
  : (separador === undefined)
  ? console.warn("No ingresaste el caracter separador")
  : console.info(cadena.split(separador))
  
  cadenaArreglo("andres federico lemme", " ")
  cadenaArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",")
  
  cadenaArreglo()
  cadenaArreglo("Hola Mundo")
  cadenaArreglo("", "-")
  
  
  console.log("-------------------");
  
  /*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
   */
  
   const repetirTexto = (texto = "", repetir = undefined) =>{
    if (!texto) return console.warn("No ingresaste ningun texto")
    if (repetir === undefined) return console.warn("No ingresaste el numero de veces que se repeite el texto")
    if (repetir === 0) return console.error("El numero de veces no puede ser 0")
    if (Math.sign(repetir) === -1) return console.error("el numero no puede ser negativo")
    
    for (let i = 1; i <= repetir; i++) {
        console.info(`${texto} , ${i}`);
        
    }
      
   }
   repetirTexto("", 4)
   repetirTexto("Hola Mundo", )
   repetirTexto("Hola Mundo", )
   repetirTexto("Hola Mundo", 0)
   repetirTexto("Hola Mundo", -5)
  