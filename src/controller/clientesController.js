import { Router } from "express";
const endpoints = Router();
import * as ServiceCliente from '../service/clientesService.js';
import * as ClientesValidation from '../validation/clientesValidation.js';

endpoints.get('/clientes', async (req, resp) => {
    try {
        let resposta = await ServiceCliente.AllClientesService()

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
        
        ClientesValidation(id);

        let resposta = await ServiceCliente.ClienteService(id)

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
    let cliente = req.body

    let resposta = await ServiceCliente.NovoClienteService(cliente)

    resp.send({
        resposta: "Id do cliente: " + resposta
    })
})

endpoints.put('/clientes/editar/:id', async (req, resp) => {
    let id = req.params.id;
    let cliente = req.body;

    let resposta = await ServiceCliente.EditarClienteService(id, cliente)

    resp.send({
        resposta: resposta
    })
})

endpoints.delete('/clientes/excluir/:id', async (req, resp) => {
    let id = req.params.id;

    let resposta = await ServiceCliente.ExcluirClienteService(id)

    resp.send({
        resposta: "Qtd:" + resposta
    })
})
export default endpoints;