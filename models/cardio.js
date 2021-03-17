const mongoose = require('mongoose');


const Schema  = mongoose.Schema

const cardioSchema = new Schema({

    excerciseType:{
        type:String,


    },

    name:{
        type:String,
        

    },
    distance:{
        type:Number,
        

    },
    duration:{
        type:Number,
        

    },
    id:{
        type:Schema.Types.ObjectId
        //ref:''
    }



})


const CardioModel = mongoose.model('Cardio', cardioSchema)

module.exports = CardioModel