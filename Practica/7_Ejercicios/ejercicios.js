
/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

const devolverCuadrados = (arr= undefined) =>{
    if(arr === undefined) return console.warn("no ingresaste un arreglo de numero")

    if(!(arr instanceof Array)) return console.warn("El valor qeu ingresas no es un arreglo")
    
    if(arr.length === 0) return console.error("el arreglo esta vacio")

    for (let num of arr) {
        if(typeof num !== "number") console.error(`El valor ${num} no es un numero`)
    }

    const newArr = arr.map(el => el*el)

    return console.info(`Arreglo original ${arr}\n Arrrglo al cuadrado: ${newArr} `)
}

devolverCuadrados()
devolverCuadrados("dfsfds")
devolverCuadrados([])
devolverCuadrados([1,4])
devolverCuadrados([1,4,5])

console.log("-----------------------------------")

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

const arrayMaxMin = (arr = undefined) =>{
    if(arr === undefined) return console.warn("no ingresaste ningun numero")

    if(!(arr instanceof Array)) return console.error("el valor que ingresaste no es un arreglo")

    if(arr.length === 0) return console.error("el arreglo esta vacio")

    for (let num of arr) {
        if(typeof num !== "number") return console.error(`el valor ${num} ingresado No es un numero`)
    }

    return console.info(`Arreglo original:${arr}\nValor Mayor: ${Math.max(...arr)}\nValor Menor: ${Math.min(...arr)}`)
}

arrayMaxMin()
arrayMaxMin(false)
arrayMaxMin([])
arrayMaxMin([1,2,true])
arrayMaxMin([1,4,5,99,-60])

console.log("-------------------------------")


/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

const separarParesImpares = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")

    if(arr.length === 0) console.warn("el arreglo esta vacio")

    for (let num of arr) {
        if(typeof num !== "number") return console.error(`el valor ${num} ingresado no es un numero`)
    }

    return console.info ({
        pares: arr.filter(num => num % 2 === 0),
        Impares: arr.filter(num => num % 2 === 1)
    })
}

separarParesImpares()
separarParesImpares("hola")
separarParesImpares([])
separarParesImpares([1,2,3,4,5,6,7,8,9,10])
 