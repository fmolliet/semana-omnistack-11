const express = require("express");
const cors = require("cors");
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json())

/**
 * Rota / returso
 */

 /**
  * Metodos HTTP
  * 
  * GET: Buscar/listar uma informação do backend
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma info "  "
  * DELETE: Deletar uma info "  "
  */

  /**
   * Tipos de parametros
   * 
   * Query: Parametros nomeados enviados na rota | user/?name=i |  req.query
   * Route: parametros utilizados para identificar recursos | /user/:id |  req.params
   * body: Parametros  | body { id: 1} | req.body 
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, MS SQL server
    * NoSQL: MongoDB, CouchDB, etc\
    * 
    * SQL tem controle maior da estrutura
    * NoSQL menos estruturado
    * 
    * SQLite 
    */


    /**
     * Driver: SELECT * FROM USER
     * // KNEX
     * Query Builder: table('users').select('*').where()
     */
     
app.use(routes);
app.use(errors());

module.exports = app;
