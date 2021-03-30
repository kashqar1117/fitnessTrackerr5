const mongoose = require('mongoose');


const Schema = mongoose.Schema

const workoutSchema = new Schema({

    day:{
        type:Date,
        default:Date.now
    },


    excercises: [
        {
            type: {
                type: String,
                required: "Exercise is required"
            },

            name: 
            {
                type: String,
                required: "Field Required"

            },
            duration: 
            {
                type: Number,
                required: "Field Required"
                
            },
            distance: 
            {
                type: Number,
             },

            weight:
             {
                type: Number,
            },
            sets: 
            {
                type: Number,
            },
            reps:

             {
                type: Number,
             }
        }


    ]



})


const workoutModel = mongoose.model('Workout', workoutSchema)

module.exports = workoutModel