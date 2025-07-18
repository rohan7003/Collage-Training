const express = require('express')
const app = express()
const port =3002

app.get("/",(req,res)=>{
    res.send("AIML Kolhapur")
})

app.get("/about", (req, res) => {
    res.send("This is about page")
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})