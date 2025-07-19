let Myname = "rohan"
let age = 21

console.log(`Name is ${Myname} and age is ${age}`);

// function without calling
const add1 =(x,y)=> console.log(x+y);
add1(3,2)

//arrays
const fruits = ["apple","mango","banana"]
console.log(fruits);
fruits.pop()
console.log(fruits);
fruits.push("grapes")
console.log(fruits);
fruits.shift()
console.log(fruits);
fruits.unshift("orange")
console.log(fruits);
console.log(fruits.length);
x = fruits.reverse()
console.log(x);
console.log(fruits[1]);

document.getElementById('z').textContent = fruits[1]
document.querySelector('h3').textContent += fruits[2]

