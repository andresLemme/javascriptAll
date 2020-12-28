/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste ninguna cadena de texto");

  if (typeof cadena !== "string")
    return console.error(
      `El valor "${cadena}" ingresado no es una cadena de texto`
    );

  let vocales = 0;
  let consonante = 0;
  cadena = cadena.toLowerCase();

  for (let letra of cadena) {
    if (/[aeiouáéíóú]/.test(letra)) {
      vocales++;
    }
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
      consonante++;
    }
  }
  return console.info({cadena, vocales, consonante});
};

contarLetras();
contarLetras(3);
contarLetras("Hola Mundo");
contarLetras("Andres Lemme")
contarLetras("Carla ñoña")
contarLetras("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

console.log("------------------")

/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

const validarNombre = (nombre="") =>{
 
    if(!nombre) return console.warn("No ingresaste el nombre")

    if(typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado no es una cadena de texto`)

    //^$ -> indica que no puede haber nada antes ni despues de cada simbolo.
    //[] son agrupadores - 
    //+ evalua cada caracter por cada cadena de texto
    // \s para dejar espacios en blanco
    // g -> busca en todos los caracteres
    // metodo test evalua si se cuemple o no
    let expReg = /^[A-Za-zÑñÁáÉéÍíÓÚú\s]+$/g.test(nombre)

    return (expReg) 
    ? console.info(`${nombre} es un nombre valido`)
    : console.warn(`${nombre} NO es un nombre valido`)

}

validarNombre()
validarNombre(3)
validarNombre("Andres")
validarNombre("Andres Lemme")
validarNombre("Andres Lemme, 38")

console.log("---------------------------------------------")
/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
 */

 const validarEmail = (email= "") => {
    if(!email) return console.warn("no ingresaste email")

    if(typeof email !== "string") return console.warn(`el valor ${email} ingresado no es una cadena de texto valido`)

    let expReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)

    return (expReg)
    ? console.info(`${email} es un email valido`)
    : console.info(`${email} no es un email valido`)
 }

 validarEmail()
 validarEmail(3)
 validarEmail("andres.lemme@gmail.com")

