import * as dbClientes from '../repository/clientesRepository.js';


export async function AllClientesService() {

    let resposta = await dbClientes.ListarTodosClientes()

    return resposta;
}

export async function ClienteService(id) {

    ClientesValidation.ErroListarCliente(id)

    let resposta = await dbClientes.ListarCliente(id)

    return resposta;
}

export async function NovoClienteService(cliente) {

    let resposta = await dbClientes.NovoCliente(cliente);

    return resposta;
}

export async function EditarClienteService(id, cliente) {

    let resposta = await dbClientes.EditarCliente(id, cliente)

    return resposta;
}

export async function ExcluirClienteService(id) {

    let resposta = await dbClientes.ExcluirCliente(id)

    return resposta;
}