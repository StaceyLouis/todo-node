require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express()
const todoRouter = require("./routes/todo")
var cors = require('cors');

const PORT = process.env.PORT || 3030

app.use(express.static('public'));
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));



app.use(express.json())
app.use('/todos', todoRouter)

const mongoString = process.env.MONGO_URI

mongoose.connect(mongoString);

const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req,res)=>{
    res.statusCode = 200
    res.send("<html><body><h1>Todo Server</h1></body></html>")
})

app.listen(PORT, (req,res)=>{
    console.log(`listening on port ${PORT}`)
})