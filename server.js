const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Workout = require('./models/workout')
var path = require('path');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))) 

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});



Workout.create({})
.then(function(workouts){
    console.log(workouts)

})

app.get('/exercise', (req, res)=>
{
    console.log(req.body)
    res.sendFile(__dirname + '/public/exercise.html');
})
app.get('/stats', (req, res)=>
{
    console.log(req.body)
    res.sendFile('/public/stats.html')
})

app.listen(3000), () =>{
    console.log('server running')
}

app.post("/api/workouts", ({ body }, res) => {

    console.log(body)
   
  
    Workout.save(workouts, (error, saved) => {
      if (error) {
        console.log(error);
      } else {
        res.send(saved);
      }
    });
  });
  