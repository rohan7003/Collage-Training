const express = require('express')
const app = express()
const port = 3001

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/rohan1');

const Cat = mongoose.model('school', { name: String , year: Number });

const kitty = new Cat({ name: 'YIS', year: 1992 });
kitty.save().then(() => console.log('Study'));

app.get('/',(req,res)=>{
    res.send("I am connecting  to DB")
})

app.listen(port,()=>{
    console.log(`server is listing on port ${port}`);
    
})