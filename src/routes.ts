import { Router } from 'express'; //IMPORTAR O EXPRESS
import OrphanagesController from "./controllers/OrphanagesController"

// PASSAR AS FUNÇÕES QUE VAO SER EXECUTADAS DE ACORDO COM CADA ROTA CHAMADA

const routes = Router(); // Rotas como função

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', OrphanagesController.create);

export default routes;


// routes.get('/users/:id', (request, response) => {    
//     return response.json({ message: 'Hello World'});
// });

