const db = require('../../data/dbConfig')

// gets all resources
const getResources = () => {
    return db('resources')
}

// finds resource by resource_id
const findResourceById = (id) => {
    return db('resources')
    .where('resource_id', id).first()
}

// inserts new resource then calls findResourceById to return newly created resource
const createResource = async (resource) => {
    return findResourceById(await db('resources').insert(resource))
}

module.exports = {
    getResources,
    createResource,
    findResourceById
}