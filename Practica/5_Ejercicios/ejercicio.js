/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/

const BinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn("no ingresaste ningun numero a convertir");

  if (typeof numero !== "number")
    return console.error(`el valor ${numero} ingresado NO es un numero`);

  if (base === undefined)
    return console.warn("No ingresaste la base a convertir");

  if (typeof base !== "number")
    return console.error(`el valor ${base} ingresado no es un numero`);

  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    return console.warn(
      `${numero} base ${base} = ${numero.toString(base)} base 2`
    );
  } else {
    return console.error("el tipo de base a convertir NO es valido");
  }
};

BinarioDecimal();
BinarioDecimal("3");
BinarioDecimal(100);
BinarioDecimal(100, "2");
BinarioDecimal(100, 2);
BinarioDecimal(1110010, 2);

console.log("--------------------------");

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/

const aplicarDescuento = (monto = undefined, desc = 0) => {
  if (monto === undefined) return console.warn("no ingresaste ningun numero");

  if (typeof monto !== "number")
    return console.warn(`el valor ${monto} ingresado no es un numero`);

  if (monto === 0) return console.error("El monto no puede ser 0");

  if (Math.sign(monto) === -1)
    return console.error(`el monto no puede see negativo`);

  if (typeof desc !== "number")
    return console.warn(`el valor ingresado ${desc} no es un numero `);

  if (Math.sign(desc) === -1)
    return console.error("el descuento no puede ser negativo");

    return console.info(`$${monto} - ${desc}% = $${monto - ((monto * desc) /100)} `)
};

aplicarDescuento()
aplicarDescuento("3")
aplicarDescuento(0)
aplicarDescuento(-5)
aplicarDescuento(100,"5")
aplicarDescuento(100,-5)
aplicarDescuento(1000,25)
aplicarDescuento(1000)

console.log("------------------------")


/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */

 calcularAnios = (fecha= undefined) => {
     if(fecha === undefined) return console.warn("no ingresaste fecha")

     if(!(fecha instanceof Date)) return console.warn("El valor ingresado no es una fecha valida")

     let hoyMenosFecha = new Date().getTime() - fecha.getTime()

     let aniosEnMS = 1000 * 60 *60 *24 *365
     let aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS)

     return (Math.sign(aniosHumanos) === -1)
     ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
     : (Math.sign(aniosHumanos) === 1)
     ? console.info(`han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
     : console.info(`estamos en el año actual ${fecha.getFullYear()}`)
 }

 calcularAnios()
 calcularAnios({})
 calcularAnios(false)
 calcularAnios(true)
 calcularAnios(new Date())
 calcularAnios(new Date(1982,1,01))
 calcularAnios(new Date(1962,1,01))
 calcularAnios(new Date(2080,1,01))