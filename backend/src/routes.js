import { Router } from 'express';

import SessionController from './controllers/SessionController';
import OngController from './controllers/OngController';
import IncidentController from './controllers/IncidentController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.get('/incident', IncidentController.show);
routes.delete('/incidents/:id', IncidentController.delete);

export default routes;