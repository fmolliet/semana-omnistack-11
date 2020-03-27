const { Router } = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = Router(); 

routes.post("/sessions", SessionController.create);

routes.get('/ongs', OngController.index);
routes.post("/ongs", OngController.store);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.store);
routes.delete("/incidents/:id", IncidentController.delete)

module.exports = routes;