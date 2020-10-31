// APLICAÇÕES WEB PADRÃO MVC
// MODEL
// VIEWS
// CONTROLLERERS


// ROTAS (Conjunto)
// Recurso (Usuário)

// Metódos HTTP GET, POST, PUT, DELETE
// Parâmetros 


// Query Params: http://localhost:3333/users?search=diego&page=2 (Filtra e outras opções)
// Route Params: http://localhost:3333/users/1 (Identificar um Recurso)
// Query Body: http://localhost:3333/users/1 (Informações mais completas / Identificar um Recurso)

    // console.log(request.query);
    // console.log(request.params);
    // console.log(request.body);

 // ---------------------------------------------------------------------
 
 


// 0. INICIANDO O PROJETO
    // TERMINAL yarn add express   
    // TERMINAL yarn add @types/express
    // TERMINAL yarn add typescript -D
    // TERMINAL tsc --init
    // TERMINAL yarn add ts-node-dev
// EDITAR O package.json e CRIAR SCRIPT DEV
    // yarn dev

// 1. CRIAR O SERVER.JS
// Driver nativo, Query Builder (KNEX) , Orm

 // 2. CRIAR O BANCO: pasta databse, arquivo database.sqlite, arquivo connection.ts
 // 3. CRIAR A CONEXÃO COM O BANCO no arquivo connection.ts

// 4. INSTALAR O ORM  "yarn add typeorm"
// 5. CRIAR ormconfig.json na raiz do sistema
// 6. EDITAR O ormconfig.json
// 7. CRIAR LINHA NO package.json:  "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"

// 8. CRIAR MIGRAÇÕES 
// 8. TERMINAL > yarn typeorm migration:create -n create_orphanages
// 9. EDITAR MIGRAÇÕES EM ./src.../migrations


// 12. CRIAR MODELOS DE DADOS models/Orphanages.ts
// 13. CRIAR ROTAS
// 14. EDITAR ormconfig.json: "entities": [        "./src/models/*.ts"        ],

import express from 'express';
import './database/connection'; //IMPORTAR O DATABASE

import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);


// 14. CRIAR ROTAS
// 15. CONFIGURAR O IMNSONIA
// 16. SEPARAR ROTAS #2 59:00
// 17. SEPARAR CONTROLLERS #2 1:02:00
// 18. CRIAR TABELA DE IMAGES  >  yarn typeorm migration:create -n images


app.listen(3333);


// 19. PREPARAR UPLOAD DE IMAGES (1:16:25)
// yarn add multer ; yarn add @types/multer -D
// CREATE config/upload.ts

// 20. INCLUIR UPLOAD NAS ROTAS routes.ts





