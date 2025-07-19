console.log("breakfast");
setTimeout(()=>{
    console.log("dinner");
},2000)
z= setInterval(()=>{
    console.log("tea");
},1000)
setTimeout(()=>{
    clearInterval(z)
    console.log("please sleep no more tea");
    
},4000)
console.log("lunch");


