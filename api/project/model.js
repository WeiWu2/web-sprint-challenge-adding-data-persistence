const db = require('../../data/dbConfig')


const convertProjectBoolean = (project) => {
    if(project.project_completed === 0)
    return{...project, project_completed: false}
    else
    return {...project, project_completed: true}
}

const get = async () => {
    const projects = await db('projects')
    const newProject = projects.map((project) => {
       return convertProjectBoolean(project)
    })
    return newProject
}

const findById = (id) => {
    return db('projects')
    .where('project_id', id).first()
}

const create = async (project) => {
    const id = await db('projects')
    .insert(project)
   const newProject = await findById(id)
   return convertProjectBoolean(newProject)
}

module.exports = {
    get,
    create,
    findById,
    convertProjectBoolean
}