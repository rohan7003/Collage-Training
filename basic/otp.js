// console.log(Math.min(45,34,22,48, 92));
// console.log(Math.max(45, 34, 22, 48, 92));

// console.log(Math.PI);

// console.log(Math.random()*10);
// console.log(Math.floor(5.8769)); 
// console.log(Math.ceil(5.8769));

// console.log(Math.floor(Math.random()*1000));

function num() {
    let otp = ''
    for (i=0;i<6;i++){
        otp += Math.floor(Math.random() * 10)
    }
    document.getElementById('z').textContent = otp
    console.log(otp);

}
