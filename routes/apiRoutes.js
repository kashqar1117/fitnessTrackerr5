const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/api/workouts', (req,res) =>{
    console.log(req.body)

})