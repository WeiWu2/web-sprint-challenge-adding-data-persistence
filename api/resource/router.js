// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resource = require('./model')

// GET returns all projects 
router.get('/',(req,res,next) => {
    Resource.getResources()
    .then((projects) => {
        res.json(projects)
    })
    .catch(next)
})

//POST creates new project in database with contents of req.body
router.post('/', (req,res,next) => {
    Resource.createResource(req.body)
    .then((project) => {
        res.json(project)
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