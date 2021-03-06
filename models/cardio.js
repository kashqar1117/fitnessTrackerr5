const mongoose = require('mongoose');


const Schema = mongoose.Schema

const cardioSchema = new Schema({


    excersices: [
        {
            excerciseType: {
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


const CardioModel = mongoose.model('Cardio', cardioSchema)

module.exports = CardioModel