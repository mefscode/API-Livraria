import { Router } from "express";
const endpoints = Router();
import {
    AllLivrosService,
    LivrosService,
    NovoLivroService,
    EditarLivroService,
    ExcluirLivroService
} from '../service/livrosService.js'

import {
ErroListarLivro,
ErroCriarLivro,
ErroAtualizarLivro,
ErroExcluirLivro
} from '../validation/livrosValidation.js';


endpoints.get('/livros', async (req, resp) => {
    try {

        let resposta = await AllLivrosService()

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.get('/livro/:id', async (req, resp) => {
    try {
        let id = req.params.id;

                ErroListarLivro(id)

        let resposta = await LivrosService(id)

        resp.send({
            resposta: resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.post('/livro/criar', async (req, resp) => {
    try {
        let livro = req.body;

        ErroCriarLivro(livro);

        let resposta = await  NovoLivroService(livro);

        resp.send({
            resposta: "O ID do livro é " + resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.put('/livro/editar/:id', async (req, resp) => {
    try {
        let livro = req.body;
        let id = req.params.id;

        ErroAtualizarLivro(id, livro);

        let resposta = await EditarLivroService(id, livro);

        resp.send({
            resposta: "Livros alterados: " + resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

endpoints.delete('/livro/excluir/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        ErroExcluirLivro(id)

        let resposta = await ExcluirLivroService(id)

        resp.send({
            resposta: "O livro do ID " + id + " Foi excluido com sucesso, Qtd: " + resposta
        })
    }
    catch (err) {
        logError(err);
        resp.status(400).send(erroJson(err));
    }
})

export default endpoints;