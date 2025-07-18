const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3002

//middleware
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello World")
})

//connect to db
mongoose.connect("mongodb://localhost:27017/crud")
console.log("connected");


// mongoose schema and model
const nameSchema = new mongoose.Schema({
    name: String
})

const Name = mongoose.model('name',nameSchema)


app.post('/names',(req,res)=>{
    const newName = new Name({name: req.body.name})
    newName.save()
    .then(savedName => res.json(savedName))
})

app.get("/names",(req,res)=>{
    Name.find()
    .then(names => res.json(names))
})

app.get("/user/:id", (req, res) => {
    res.send(`The id is ${req.params.id}`)
})

app.put("/names/:id",(req,res)=>{
    Name.findByIdAndUpdate
    (req.params.id,{
        name: req.body.name
    },{new:true}).then(updatedName =>{res.json(updatedName)})
})

app.delete("/names/:id",(req,res)=>{
    Name.findByIdAndDelete
    (req.params.id)
    .then(()=>{
        res.json({ message: "Deleted" })
    })
})

app.listen(port ,()=>{
    console.log("project time");
})
