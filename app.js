const express = require('express')
const app = express()
const mongoose = require('mongoose')

const URI = 'mongodb+srv://BookUser:book123@cluster0.s1zjw.mongodb.net/Book?retryWrites=true&w=majority&appName=Cluster0'

//connects to the MongoDB database
mongoose.connect(URI).then(() => {
    app.listen(3000)
    console.log('listening on port 3000')
}).catch(() => console.log('Error connecting to port 3000'))

app.get('/', (req, res) => {
    res.send('We have Communication')
})