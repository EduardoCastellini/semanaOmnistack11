const express = require('express');
const routes = express.Router();

const Ongs = require('./controllers/OngController');
const Incidents = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions',SessionController.create);

routes.get('/ongs', Ongs.list);
routes.post('/ongs', Ongs.create );

routes.get('/incidents', Incidents.list);
routes.post('/incidents', Incidents.create);
routes.delete('/incidents/:id', Incidents.delete);

routes.get('/profile', ProfileController.index)

module.exports = routes