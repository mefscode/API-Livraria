import { Router } from "express";
const endpoints = Router();
import {
AllVendasService,
VendasService,
NovaVendaService,
EditarVendaService,
ExcluirVendaService
} from '../service/vendasService.js';
import{
ErroListarVenda,
ErroCriarVenda,
ErroAtualizarVenda,
ErroExcluirVenda
} from '../validation/vendasValidation.js'

endpoints.get('/vendas', async (req, resp) => {
    try {

        let resposta = await AllVendasService()

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.get('/vendas/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        ErroListarVenda(id);

        let resposta = await VendasService(id)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.post('/vendas/criar', async (req, resp) => {
    try {
        let venda = req.body;

        ErroCriarVenda(venda)

        let resposta = await NovaVendaService(venda)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.put('/vendas/editar/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let venda = req.body;

        ErroAtualizarVenda(id, venda)

        let resposta = await EditarVendaService(id, venda)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.delete('/vendas/excluir/:id' , async (req,resp) => {
    try{
    let id = req.params.id;

    ErroExcluirVenda(id)

    let resposta = await ExcluirVendaService(id)

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