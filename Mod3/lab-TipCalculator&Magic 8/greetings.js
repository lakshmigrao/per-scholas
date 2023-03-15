const express = require('express')

const app = express()

const PORT = 8081

app.get('/greetings',(req,res) => {

    res.send('Hello Stranger')
})


app.get('/greetings/:name',(req,res) => {

    res.send('Hello '+req.params.name +' Its so great to see you. ')
})



app.listen(PORT, () => {
    console.log('Listening on port : '+PORT)
})