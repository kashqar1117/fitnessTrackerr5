const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = require('./models')



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});



db.Cardio.create({name: 'Workouts'})
.then(function(workouts){
    console.log(workouts)

})



app.listen(3000), () =>{
    console.log('server running')
}