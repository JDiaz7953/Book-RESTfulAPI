const mongoose = require('mongoose')
const Schema = mongoose.Schema

//defining the Schema for the database
const BookSchema = new Schema({
    title: String,
    author: String,
    year: Number
})

//define the model
const Books = mongoose.model('Books', BookSchema)


//export to app.js
module.exports = Books
