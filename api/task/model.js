const db = require('../../data/dbConfig')

// converts boolean from 0 || 1 to true || false (probably some other better way of doing this)
const convertTaskBoolean = (task) => {
    if(task.task_completed === 0)
    return{...task, task_completed: false}
    else
    return {...task, task_completed: true}
}

// gets all tasks with projects table joined, calls converter to convert the integer 0 || 1
const getTasks = async () => {
    const tasks = await db('tasks as t').leftJoin('projects as p', "t.project_id", "p.project_id")
    return tasks.map((task) => {
        return convertTaskBoolean(task)
     })
}
// finds the first task by tasks_id
const findTaskById = (id) => {
    return db('tasks')
    .where('task_id', id)
    .first()
}
// creates new task, calls findTaskById to get the new task then calls convertTaskBoolean to convert the boolean integer 0 || 1
const createTask = async (task) => {
   return convertTaskBoolean(await findTaskById(await db('tasks').insert(task)))
}

module.exports = {
    getTasks,
    createTask,
    findTaskById,
    convertTaskBoolean
}