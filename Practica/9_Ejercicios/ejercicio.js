/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/

class Pelicula{
    //desectructuramos cada una de las posiciones del objeto
constructor({id,titulo,director,estreno,pais,generos,calificacion}){
    // instanciamos los parametros del objeto
this.id = id,
this.titulo = titulo,
this.director = director,
this.estreno = estreno,
this.pais = pais,
this.generos = generos,
this.calificacion = calificacion

this.validarIMDB(id),
this.validarTitulo(titulo),
this.validarDirector(director),
this.validarEstreno(estreno),
this.validarPais(pais),
this.validarGeneros(generos),
this.validarCalificacion(calificacion)

}


static get listaGeneros(){
  return[ "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
}

static generosAceptados(){
  return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(",")}`)
}

validarNumero(propiedad, valor) {
  if (!valor) return console.warn(`${propiedad} ${valor} esta vacio`)
  if (typeof valor !== "number") return console.warn(`${propiedad} ${valor} ingresado No es un nùmero`)

  return true
}

validarCadena(propiedad, valor){
  if (!valor) return console.error(`${propiedad} "${valor} esta vacia"`)
  if(typeof valor !=="string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`)
  return true
}

validadLogCadena(propiedad, valor, longitud){
  if (valor.length > longitud) {
    return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos(${longitud})`)
  }
  return true
}

validarArreglo(propiedad, valor){
  if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)
  if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" no tiene datos`)

  if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`)

  for (let cadena of valor) {
    if(typeof cadena !== "string") return console.error(`el valor "${cadena}" ingresado No es una cadena de texto`)

    return true
  }
}

validarIMDB(id){
  if(this.validarCadena("IMDB id" , id))
    if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
      return console.error(`IMDB id "${id}" no es valido debe tener 9 caracteres, los 2 primeros letras minúsculas, los restantes números`)
    
  
}

validarTitulo(titulo){
  if(this.validarCadena("Titulo" , titulo))
    this.validadLogCadena("Titulo", titulo, 100)
  
}

validarDirector(director){
  if(this.validarCadena("Director" , director))
    this.validadLogCadena("Director", director, 50)
  
}

validarEstreno(estreno){
  if(this.validarNumero("Año de estreno00" , estreno))
    if(!(/^([0-9])(4)$/.test(estreno)))
      return console.error(`año de estreno "${estreno}" no es valido debe tener 4 digitos.`) 
}

validarPais(pais){
  this.validarArreglo("Pais", pais)
}

validarGeneros(generos){
 if (this.validarArreglo("Generos", generos)){
   for (let genero of generos) {
     console.log(genero, Pelicula.listaGeneros.includes(genero))
     if(!Pelicula.listaGeneros.includes(genero)){
       console.error(`Generos incorrectos ${generos.join(",")}`)
       Pelicula.generosAceptados()
     }
   }
 }
}

validarCalificacion(calificacion){
  if(this.validarNumero("Calificacion" , calificacion))
    return (calificacion < 0 || calificacion > 10)
    ? console.error("La calificacion tiene que estar en un rango de 0 y 10")
    : this.calificacion.toFixed(1)
}

fichaTecnica(){
  console.info(`Ficha Tecnica:\nTitulo:${this.titulo}\nDirector:${this.director}\nAño: ${this.estreno}\nPais: ${this.pais}\nGeneros: ${this.generos.join(",")}\nCalificacion: ${this.calificacion}\nIMDB id: ${this.id}`)
}


}
// Pelicula.generosAceptados()
// const peli = new Pelicula({
//   id: "ee1234564",
//   titulo:"Titulo de la peli",
//   director:"Director de la peli",
//   estreno: 2020,
//   pais:[],
//   generos:["Comedy", "Humor negro", "Sport"],
//   calificacion: 7.3

// })
// peli.fichaTecnica()


const misPelis = [
  {
    id:"tt0903027",
    titulo: "Into the Wild",
    director: "Sean Penn",
    estreno: 2007,
    pais:["Usa"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.2
  },
  {
    id:"tt2030457",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais:["Usa"],
    generos: ["Action", "Sport", "Drama"],
    calificacion: 6.2
  },
  {
    id:"tt4466990",
    titulo: "The dark Knight",
    director: "Christopher Nolan",
    estreno: 2008,
    pais:["Usa"],
    generos: ["Action", "Crime", "Drama"],
    calificacion: 8.2
  }
]

misPelis.forEach(el => new Pelicula(el).fichaTecnica)