import { Router } from "express";
const endpoints = Router();

import {
    AllVendaItensService,
    VendaItemService,
    NovoVendaItemService,
    EditarVendaItemService,
    ExcluirVendaItemService
} from '../service/vendaItemService.js';

import {
    ErroListarVendaItem,
    ErroCriarVendaItem,
    ErroAtualizarVendaItem,
    ErroExcluirVendaItem
} from '../validation/vendaItemValidation.js';

endpoints.get('/vendas-itens', async (req, resp) => {
    try {

        let resposta = await AllVendaItensService()

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.get('/vendas-itens/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        ErroListarVendaItem(id)

        let resposta = await VendaItemService(id)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.post('/vendas-itens/criar', async (req, resp) => {
    try {
        let itemVenda = req.body;

        ErroCriarVendaItem(itemVenda)

        let resposta = await NovoVendaItemService(itemVenda)

        resp.send({
            resposta: "Id do item da venda: " + resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.put('/vendas-itens/editar/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let itemVenda = req.body;

        ErroAtualizarVendaItem(id, itemVenda)

        let resposta = await EditarVendaItemService(id, itemVenda)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.delete('/vendas-itens/excluir/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        ErroExcluirVendaItem(id)

        let resposta = await ExcluirVendaItemService(id)

        resp.send({
            resposta: "Qtd:" + resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

export default endpoints;
