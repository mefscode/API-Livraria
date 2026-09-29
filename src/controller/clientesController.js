import { Router } from "express";
const endpoints = Router();
import {
    AllClientesService,
    ClienteService,
    NovoClienteService,
    EditarClienteService,
    ExcluirClienteService
}from '../service/clientesService.js';
import {
    ErroListarCliente,
    ErroCriarCliente,
    ErroAtualizarCliente,
    ErroExcluirCliente
} from '../validation/clientesValidation.js';



endpoints.get('/clientes', async (req, resp) => {
    try {

        let resposta = await AllClientesService()

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.get('/clientes/:id', async (req, resp) => {
    try {
        let id = req.params.id

        ErroListarCliente(id);

        let resposta = await ClienteService(id)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.post('/clientes/criar', async (req, resp) => {
    try {
        let cliente = req.body

        ErroCriarCliente(cliente)

        let resposta = await NovoClienteService(cliente)

        resp.send({
            resposta: "Id do cliente: " + resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.put('/clientes/editar/:id', async (req, resp) => {

    try {
        let id = req.params.id;
        let cliente = req.body;

        ErroAtualizarCliente(id, cliente)


        let resposta = await EditarClienteService(id, cliente)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.delete('/clientes/excluir/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        ErroExcluirCliente(id)

        let resposta = await ExcluirClienteService(id)

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