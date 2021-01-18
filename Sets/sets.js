
const set = new Set([1,2,3,3,4,5,5, {} ,true, false, false,{}, "hola","Hola"])

console.log(set)
console.log(set.size)

console.log("---------")

const set2 = new Set()

set2.add(1),
set2.add(2),
set2.add(3),
set2.add(true),
set2.add(true),
set2.add({})

console.log(set2)
console.log(set2.size)

console.log("-----Recoriendo Set ----")

for (const iterator of set) {
    console.log(iterator)
}

console.log("-----forEach de Set 2----")

set2.forEach(element => {
    console.log(element)
});

console.log("----Set convertido Array------")

const arr = Array.from(set)
console.log(arr)
console.log(arr[4])

set.delete("Hola")
console.log(set)

console.log("Valida si un dato exite dentro de la coleccio")
console.log(set.has("hola"))
console.log(set.has(19))


console.log("------Set 2 ---------")

set2.clear()
console.log(set2)