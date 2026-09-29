import * as DBVenda from '../repository/vendasRepository.js';

export async function AllVendasService() {
    let resposta = await DBVenda.ListarVendas()
    return resposta;
}

export async function VendasService(id) {
    let resposta = await DBVenda.ListarVenda(id)
    return resposta;
}

export async function NovaVendaService(venda) {
    let resposta = await DBVenda.CriarVenda(venda);
    return resposta;

}

export async function EditarVendaService(id, venda) {
    let resposta = await DBVenda.EditarVenda(id, venda)
    return resposta;
}

export async function ExcluirVendaService(id) {
    let resposta = await DBVenda.ExcluirVenda(id);
    return resposta;   
}