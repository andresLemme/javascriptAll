
/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

const ordenarArreglo = (arr = undefined) =>{
 if (arr === undefined) return console.warn(
     "No ingresaste ningun arreglo de numeros"
 )
 if (!arr instanceof Array) return console.error("el valor que ingresaste no es un arreglo")
 if(arr.length === 0) return console.error("El arrglo esta vacio")

 for (let num of arr) {
     if(typeof num !== "number") return console.error(`el valor "${num}" ingresado no es un numero`)
 }

 return console.info({
    arr, 
    asc: arr.map(el => el).sort(), 
    desc:arr.map(el => el).sort().reverse()
 })
}

ordenarArreglo()
ordenarArreglo("asdsadsa")
ordenarArreglo([])
ordenarArreglo([1,2,3,4,5,6])

console.log("------------------------------")

/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/

const quitarDuplicado = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

    if(!(arr instanceof Array)) return console.error("el valor que ingresaste no es un arreglo")
    if(arr.length === 0) return console.error("el arreglo esta vacio")

    if(arr.length === 1) return console.warn("El arreglo debe tener al menos 2 elementos")

    // return console.info({
    //     original: arr,
    //     sinduplicados: arr.filter((value,index,self) => self.indexOf(value) ===index)
    // })

    return console.info({
        original:arr,
        sinDuplicado: [...new Set(arr)]
    })
}

quitarDuplicado()
quitarDuplicado({})
quitarDuplicado([])
quitarDuplicado([2])
quitarDuplicado(["x", 10, "x", 2, "10", 10, true,true])

console.log("------------------------------")


/*26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

const promedio = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

    if (!(arr instanceof Array)) return console.error("el valor que ingresaste no es un arreglo")

    if (arr.length === 0) return console.error("El arreglo esta vacio")

    for (let num of arr) {
        if(typeof num !== "number") return console.error(`el valor "${num}" ingresado no es un numero`)
    }

    return console.info(
        arr.reduce((total, num, index, arr) =>{
            total += num
            if (index === arr.length - 1) {
                return `el promedio de ${arr.join(" + ")} es ${total/arr.length}`
            } else {
                return total
            }
        })
    )
}

promedio()
promedio({})
promedio([])
promedio([2,true])
promedio([1,2,3,4,5,6,7,8,9])