const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const User = require('./models/userModel')


const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)
app.use('/users', userRouter)

mongoose.connect('mongodb+srv://dbuser:Password1!@cluster0.p7klgl3.mongodb.net/Clients')
.then(() => {
    console.log("connected to DB")
}).catch((error) => {
    console.log(error)
})



app.listen(3000)