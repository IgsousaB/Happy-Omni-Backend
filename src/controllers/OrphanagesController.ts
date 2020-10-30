// CRIAR FUNÇÕES QUE VÃO CONTROLAR O MODELO ORPHANAGE 
// 1. IMPORTAR O MODELO ORPHANAGE E O GETREPOSITORY
// 2. PASSSAR O REQUEST E O RESPONSE E IMPORTAR-LOS DO EXPRESS


// CRIAR FUNÇÃO INDEX, SHOW, CREATE
// CRIAR AS ROTAS INDEX, SHOW, CREATE NO ROUTES E NO INSOMNIA

import { Request, Response } from 'express';
import { getRepository } from 'typeorm'; // GERENCIAR DADOS NO BANCO
import Orphanage from '../models/Orphanage'; // MODELO PARA OS DADOS

export default {
    async index(request: Request, response: Response){
        const orphanagesRepository = getRepository(Orphanage); // PREPARA OS METODOS E IMPORTA O MODELO DE DADOS
        
        const orphanages = await orphanagesRepository.find({ // BUSCA NO BANCO OS DADOS
            // PARAMETROS DA BUSCA
        });

        return response.json(orphanages);

    },

    async show(request: Request, response: Response){
        const { id } = request.params;
        const orphanagesRepository = getRepository(Orphanage); // PREPARA OS METODOS E IMPORTA O MODELO DE DADOS
        
        const orphanage = await orphanagesRepository.findOneOrFail(id);

        return response.json(orphanage);

    },


    async create(request: Request, response: Response){
        const { // PEGA OS DADOS DA REQUISIÇÃO
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } =  request.body;
    
        const orphanageRepository = getRepository(Orphanage);
    
        const orphanage = orphanageRepository.create({ // CRIA O OBJETO orphanage, COM OS DADOS E DE ACORDO COM O MODELO
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,        
        });
    
        await orphanageRepository.save(orphanage); // SALVA NO BANCO
        
        return response.status(201).json(orphanage); 
    
    } 
};

