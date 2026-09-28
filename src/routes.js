import clientes from './controller/clientesController.js';
import livros from './controller/livrosController.js';
import venda from './controller/vendasController.js';
import vendaItem from './controller/vendaItemController.js';

export default function Rotas(api){
    api.use(clientes);
    api.use(livros);
    api.use(venda);
    api.use(vendaItem);
}