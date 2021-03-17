const mongoose = require('mongoose');


const Schema  = mongoose.Schema

const resistanceSchema = new Schema({

    excerciseType:{
        type:String,


    },

    name:{
        type:String,
        

    },
    weight:{
        type:Number,
        

    },
    sets:{
        type:Number,
        

    },
    reps:{
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


const ResistanceModel = mongoose.model('resistance', resistanceSchema)

module.exports = ResistanceModel