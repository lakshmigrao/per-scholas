const express = require('express')

const app = express()

const PORT = 8081

app.get('/tip/:total/:tipPercentage',(req,res) => {

    let result=req.params.total*req.params.tipPercentage/100;
    res.send('Your tip is '+result)
})



app.listen(PORT, () => {
    console.log('Listening on port : '+PORT)
})