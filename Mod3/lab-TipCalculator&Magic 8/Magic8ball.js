const express = require('express')

const app = express()

const PORT = 8081
const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:query',(req,res) => {

    let magicResponse = responses[Math.floor(Math.random()*responses.length)]
    res.send('Your Query is '+req.params.query+ '.<h1> The Magic Response is '+magicResponse+'</h1>')
})

app.listen(PORT, () => {
    console.log('Listening on port : '+PORT)
})