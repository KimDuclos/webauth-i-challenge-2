const db = ('../data/database.js');

module.exports = {
    add, 
    find,
    findby,
    findByID,
};

function find() {
    return db('users').select('id', 'username', 'password');
}

function findby(filter) {
    return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);
    return findbyID(id);
}

function findByID(id) {
    return db('users')
    .where({ id })
    .first();
}