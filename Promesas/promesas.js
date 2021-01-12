

function cuadradoPromesa (value) {
    if (typeof value !== 'number') {
        return Promise.reject(`Error el valor ${value} ingresado no es un numero`);
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000 )
    })
}


cuadradoPromesa(0)
.then((obj) => {
    // console.log(obj)
    console.log("Inicio promesa")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromesa(1)
})
.then((obj) => {
    // console.log(obj)
    // console.log("Inicio promesa")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromesa(2)
})
.then((obj) => {
    // console.log(obj)
    // console.log("Inicio promesa")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromesa(3)
})
.then((obj) => {
    // console.log(obj)
    // console.log("Inicio promesa")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromesa("4")
})
.then((obj) => {
    // console.log(obj)
    // console.log("Inicio promesa")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromesa(5)
})
.then((obj) => {
    // console.log(obj)
    // console.log("Inicio promesa")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    console.log("fin de la prmosea")
})
.catch(err => console.error(err)) 