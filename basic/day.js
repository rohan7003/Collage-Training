let website = document.querySelector('body')
console.log(website);

function abc(){
    website.classList.toggle('night')
    let b1 = document.getElementById('btn')
    if (b1.textContent == "🌙"){
        b1.textContent = "☀️"
    } else{
        b1.textContent = '🌙'
    }
}


