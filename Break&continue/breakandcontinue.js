const numeros = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < numeros.length; i++) {
    if(i === 5){
        break
    }
    console.log(numeros[i]);
    
}

console.log("----------------")

for (let i = 0; i < numeros.length; i++) {
    if(i === 5){
        continue
    }
    console.log(numeros[i]);
    
}