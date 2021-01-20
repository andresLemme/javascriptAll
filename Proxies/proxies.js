
const persona = {
    nombre: "",
    apellido: "",
    edad: 38
}

const manejador = {

    set(obj, prop, valor){
        
    if (Object.keys(obj).indexOf(prop) === -1) {
        return console.error(`La propiedad ${prop} no existe en el objeto persona`);
    }
    if (
        (prop === "nombre" || prop ==="apellido") && 
        !(/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor))
    ) {
        console.warn(`la propiedad ${prop} solo acepta caracteres y espacios en blanco`)
    }
        obj[prop] = valor
    }
}

const andy = new Proxy(persona, manejador)
andy.nombre ="Federico",
andy.apellido ="Valdes",
andy.edad = 30,
andy.twitter = "@aflemme"
console.log(andy)

console.log("----------")

console.log(persona)