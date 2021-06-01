const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json())



app.get('/api/users', (req, res) => {
    let friends = ['Kenny', 'Kristin', 'Mark', 'Craig', 'Emily']
    res.status(200).send(friends)
})

app.get('/weather/temperature', (req, res) => {
    console.log('I am getting here')
    // const { temperature } = req.params
    // const phrase = `<h3>It was ${temperature} today</h3>`
    let weatherObj = {status:'rainy', temperature: '80', wind: true, humidity: false}
    res.status(200).send(weatherObj)
})




app.listen(4000, () => {
    console.log('Server running on port 4000')
})