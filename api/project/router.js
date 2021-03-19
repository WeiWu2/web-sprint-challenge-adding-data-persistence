// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Project = require('./model')

router.get('/',(req,res,next) => {
    Project.get().then((projects) => {
        // const test = projects.map((project) => { 
        //     if(project.project_completed === 0)
        //     project = {...project,project_completed: false }
        //     else
        //     project = {...project,project_completed: true }
        // })
        res.json(projects)
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