const express = require('express')
const app = express()
const mongoose = require('mongoose') 
const Books = require('./model/books')

const URI = 'mongodb+srv://BookUser:book123@cluster0.s1zjw.mongodb.net/book?retryWrites=true&w=majority&appName=Cluster0'

//connects to the MongoDB database
mongoose.connect(URI).then(() => {
    app.listen(3000)
    console.log('listening on port 3000')
}).catch(() => console.log('Error connecting to port 3000'))

app.use(express.json());


app.get('/books', (req, res) => {
    Books.find().then((result) => {
        res.send(result)
    })
})



app.post('/books', (req,res) =>{
    const book = new Books(req.body)
    book.save();
    res.send(book)

})

app.delete('/books/:id', (req, res) =>{
    const id = req.params.id;
    Books.findByIdAndDelete(id).then(() => {
        console.log('Book Deleted')
        res.json({message: 'Delete Succesfully'})
    }).catch(() => {
        console.log('Issue Unkown')
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id
    Books.findById(id).then((result) => {
        res.send(result)
    })
})
