import 'dotenv/config.js';
import cors from 'cors';
import express from 'express';
import Rotas from './routes.js';
import './utils/global.js';

const api = express();
api.use(cors());
api.use(express.json());
Rotas(api)

const porta = process.env.PORT
api.listen(porta, () => console.log("Api subiu com sucesso"))