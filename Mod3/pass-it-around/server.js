const express = require('express')

const app = express()

const PORT = 8082

let noOfB = 99
app.get('/',(req,res)=>{
    res.send(`${noOfB} Bottles of beer on wall. <a href="/${noOfB-1}">take one down, pass it around.</a>`)

})

app.get('/:num_of_bottles',(req,res) => {
    if(req.params.num_of_bottles < 0 )
        res.send(`Invalid number.<a href="/">START OVER</a>`)
    else if (req.params.num_of_bottles == 0)
        res.send(`${req.params.num_of_bottles} Bottles of beer on the wall.<a href="/">START OVER</a>`)
    else
        res.send(`${req.params.num_of_bottles} Bottles of beer on the wall. <a href="/${req.params.num_of_bottles-1}">take one down, pass it around.</a>`)
})

app.listen(PORT, ()=>{

    console.log("Listening at the Port : "+ PORT)
})