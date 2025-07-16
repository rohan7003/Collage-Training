let p = new Promise((resolve, reject) => {
    resolve("Promise is successful")
})
p.then((data) => {
    console.log(data);
})

let myCal = new Promise((resolve, reject) => {
    let num = 2 + 2
    if (num == 4) {
        resolve("i did proper calculation")
    } else {
        reject("mathematics error")
    }
})

myCal.then((message) => {
    console.log("excellient", message);
}).catch((message) => {
    console.error("problem is", issue)
})

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(json => {
        document.getElementById('w').textContent += json[4].name
    })

