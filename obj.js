const person = [{
    name: "Rohan",
    age: 21,
    gender: "male",
    hobbies: ["travelling", "listening music", "cooking"],
    place: "Kolhapur",
    location: { location: "Kasba Bawada" },
    nationality: "indian",
    proffesion: "Software Developer"
},
{
    name: "Ram",
    age: 26,
    place: "Sangli",
    nationality: "indian",
    proffesion: "Writer"
},
{
    name: "maya",
    age: 28,
    hobbies: ["sleepingg", "reading", "cooking"],
    place: "Pune",
    location: { location: "Katraj" },
    proffesion: "Chef"
}
]
console.log(person);
// x = document.getElementById('d').textContent += person.place
// y = document.getElementById('f').textContent += person.hobbies[0]
document.querySelector('h4').textContent += person[1].place 
// document.querySelectorAll('h3')[0].textContent+=person[1].place 
document.querySelectorAll('h3')[0].textContent += person[1].name 

console.log(person[1].name);


