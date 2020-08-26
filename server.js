const express = require('express');
const app = express(); 

const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://brianbickes:SableDawg3!@sei.w6o9a.azure.mongodb.net/fruits-sei?"

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

const Fruit = require("./models/fruits.js")
//MIDDLEWARE
app.use(express.urlencoded({ extended: true })); //makes req.body functional 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.listen(3000, () => {
    console.log('I am always listening....')
});