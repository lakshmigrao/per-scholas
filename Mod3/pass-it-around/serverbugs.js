const express = require('express')

const app = express()

const PORT = 8082

let noOfB = 99
app.get('/',(req,res)=>{
    res.send(`<h1>${noOfB} little bugs in the code. <a href="/${noOfB-1}">take one down, patch it around.</a>`)

})

app.get('/:num_of_bugs',(req,res) => {
    if(req.params.num_of_bugs < 0 )
        res.send(`<h1>Invalid number.<a href="/">START OVER</a></h1>`)
    else if (req.params.num_of_bugs == 0)
        res.send(`<h1>${req.params.num_of_bugs} little bugs in the code.<a href="/">START OVER</a></h1>`)
    else{
        let newNoBugs= parseInt(req.params.num_of_bugs)+ Math.floor(Math.random()*5)
        res.send(`<h1>${req.params.num_of_bugs} little bugs in the code. <a href="/${newNoBugs}">take one down, patch it around.</a>${newNoBugs} new little bugs in the code.</h1>`)
    }
})

app.listen(PORT, ()=>{

    console.log("Listening at the Port : "+ PORT)
})