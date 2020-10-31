import { Router } from 'express'; //IMPORTAR O EXPRESS
import OrphanagesController from "./controllers/OrphanagesController"

import multer from 'multer'; 
import uploadConfig from './config/upload';

// PASSAR AS FUNÇÕES QUE VAO SER EXECUTADAS DE ACORDO COM CADA ROTA CHAMADA

const routes = Router(); // Rotas como função
const upload = multer(uploadConfig);


routes.get('/orphanages', OrphanagesController.index); // MOSTRAR TODOS
routes.get('/orphanages/:id', OrphanagesController.show); // MOSTRAR UM
routes.post('/orphanages', upload.array('images') , OrphanagesController.create); // CADASTRO



export default routes;


// routes.get('/users/:id', (request, response) => {    
//     return response.json({ message: 'Hello World'});
// });

