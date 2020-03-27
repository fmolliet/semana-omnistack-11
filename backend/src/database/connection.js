const knex = require('knex');
const configuration = require('../../knexfile');

// se der problemas editar migration e colocar o client utilizado
const connection = knex(configuration.development);

module.exports = connection;