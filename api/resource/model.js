const db = require('../../data/dbConfig')


const getResources = () => {
    return db('resources')
}

const findResourceById = (id) => {
    return db('resources')
    .where('resource_id', id).first()
}
const createResource = async (resource) => {
    return findResourceById(await db('resources').insert(resource))
}



module.exports = {
    getResources,
    createResource,
    findResourceById
}