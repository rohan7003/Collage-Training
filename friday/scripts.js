console.log("hello")

let college = "dy patil"
let address = "bawada"

console.log(` i am studying in ${college} and it is in ${address}`)

let age = 30
age > 30

console.log(age > 20 ? "hii friends" : "hello uncle")

const languages = ["html", 'css', 'js', 'python']
console.log(languages)

const addedLanguages = ["java", 'cpp']
console.log(addedLanguages)


addedLanguages.map((abc) => {
    console.log(abc)
})

//destructuring
const person = {
    name: "xyz",
    theAge: 22,
    nationality: "Indian",
    profession : "engineer"
}

const{name, nationality}= person
console.log(nationality);
