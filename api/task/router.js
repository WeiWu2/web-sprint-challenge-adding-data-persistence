const express = require('express')
const router = express.Router()
const Task = require('./model')

// GET returns all projects 
router.get('/',(req,res,next) => {
    Task.getTasks()
    .then((task) => {
        res.json(task)
    })
    .catch(next)
})

//POST creates new project in database with contents of req.body
router.post('/', (req,res,next) => {
    Task.createTask(req.body)
    .then((task) => {
        res.json(task)
    })
    .catch(next)
})

// error handling 
router.use((error,req,res,next) =>{ //eslint-disable-line
    res.status(500).json({
        message:error.message,
        stack: error.stack
    })
})

module.exports = router