import { Router } from "express";
const endpoints = Router();
import * as DBVenda from '../repository/vendasRepository.js';

endpoints.get('/vendas', async (req, resp) => {
    try {

        let resposta = await DBVenda.ListarVendas()

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.get('/vendas/:id', async (req,resp) => {
    try{
    let id = req.params.id;

    let resposta = await DBVenda.ListarVenda(id)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.post('/vendas/criar', async (req,resp) => {
    try{
    let venda = req.body;

    let resposta = await DBVenda.CriarVenda(venda);

            resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

export default endpoints;