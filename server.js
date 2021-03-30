const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Workout = require('./models/workout')
var path = require('path');

console.log(Workout)



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))) 

mongoose.connect('mongodb+srv://kashqar1117:Louise2121@workouts.yx82x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});




    Workout.create().then(function (workouts) {
    console.log("workouts", workouts)

})

    app.get("/api/workouts", (req, res) => {



    Workout.find({}, (err, docs) => {
        if (err) throw err;
        console.log('workoutsDocs', docs)
        res.json(docs)
    })
    })

        // app.get("/api/workouts", (req, res) => {
        // }



    // Workout.find({}, (err, docs) => {
    //     if (err) throw err;
    //     console.log('workoutsDocs', docs)
    //     res.json(docs)
    // })
    // })




    //db.students.insert({name: 'Steve', row:3, os:'Mac', hobbies:['Coding', 'Reading', 'Running'] })

    app.get('/exercise', (req, res) => {
        console.log("excerciseBody", req.body)
        res.sendFile(__dirname + '/public/exercise.html');
    })
    app.get('/stats', (req, res) => {
        console.log("statsBody", req.body)
        res.sendFile('/public/stats.html')
    })




    app.listen(8080), () => {
        console.log('server running')
    }
    // Workout.save(workouts, (error, saved) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     res.send(saved);
    //   }

//   app.post("/api/workouts", ({ body }, res) => {



//     Workout.create({exercises: {reps: req.body.reps}}) 



//    } );

  //  await Character.create([{ name: 'Will Riker' }, { name: 'Geordi LaForge' }]);
