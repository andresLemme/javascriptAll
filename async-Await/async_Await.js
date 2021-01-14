
//Funcion Asincrona Declarada

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


async function funcionAsincronaDeclarada() {
    try {
        console.log("Inicio de Async Function")

        let obj = await cuadradoPromesa(0)
        console.log(`Async Function: ${obj.value} ${obj.result}`)

        obj = await cuadradoPromesa(1)
        console.log(`Async Function: ${obj.value} ${obj.result}`)

        
        obj = await cuadradoPromesa(2)
        console.log(`Async Function: ${obj.value} ${obj.result}`)

        
        obj = await cuadradoPromesa("3")
        console.log(`Async Function: ${obj.value} ${obj.result}`)

        
        obj = await cuadradoPromesa(4)
        console.log(`Async Function: ${obj.value} ${obj.result}`)

        console.log("Fin Async Function")
        
    } catch (error) {
        console.error(error)
    }
}

funcionAsincronaDeclarada()

//Funcion Async expresada

const FuncionAsincronaDeclarada =  async() => {
    try {
        console.log("Inicio de Async Function")

        let obj = await cuadradoPromesa(5)
        console.log(`Async Function: ${obj.value} ${obj.result}`)

        obj = await cuadradoPromesa(6)
        console.log(`Async Function: ${obj.value} ${obj.result}`)

        
        obj = await cuadradoPromesa(7)
        console.log(`Async Function: ${obj.value} ${obj.result}`)

        
        obj = await cuadradoPromesa("8")
        console.log(`Async Function: ${obj.value} ${obj.result}`)

        
        obj = await cuadradoPromesa(9)
        console.log(`Async Function: ${obj.value} ${obj.result}`)

        console.log("Fin Async Function")
        
    } catch (error) {
        console.error(error)
    }
} 

FuncionAsincronaDeclarada()
