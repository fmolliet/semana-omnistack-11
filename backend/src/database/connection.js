const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test'? configuration.test : configuration.development
// se der problemas editar migration e colocar o client utilizado
const connection = knex(config);

module.exports = connection;