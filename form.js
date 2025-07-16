let data = document.querySelector('form')
console.log(data);

data.addEventListener('submit',function(e){
    e.preventDefault()
    let pass = document.getElementById('p').value
    console.log(pass);
    if(pass.length <6){
        alert("Too Small Password")
    }else if(pass.length > 12){
        alert("Too big Password")
    }
    else{
        window.location.href='day.html'
    }
})