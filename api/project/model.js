const db = require('../../data/dbConfig')

// converts boolean from 0 || 1 to true || false (probably some other better way of doing this)
const convertProjectBoolean = (project) => {
    if(project.project_completed === 0)
    return{...project, project_completed: false}
    else
    return {...project, project_completed: true}
}

// gets all projects, calls converter to convert the integer 0 || 1
const getProjects = async () => {
    const projects = await db('projects')
    return projects.map((project) => {
        return convertProjectBoolean(project)
     })
}

// finds the first project by project_id
const findProjectById = (id) => {
    return db('projects')
    .where('project_id', id)
    .first()
}

// creates new project, calls findById to get the new project then calls convert to convert the boolean integer 0 || 1
const createProject = async (project) => {
   return convertProjectBoolean(await findProjectById(await db('projects').insert(project)))
}

module.exports = {
    getProjects,
    createProject,
    findProjectById,
    convertProjectBoolean
}