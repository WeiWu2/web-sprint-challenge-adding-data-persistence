// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Project = require('./model')

router.get('/',(req,res,next) => {
    Project.get()
    .then((projects) => {
        res.json(projects)
    })
    .catch(next)
})
router.post('/', (req,res,next) => {
    Project.create(req.body)
    .then((project) => {
        res.json(project)
    })
    .catch(next)
})


router.use((error,req,res,next) =>{ //eslint-disable-line
    res.status(500).json({
        message:error.message,
        stack: error.stack
    })
})



module.exports = router