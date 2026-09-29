import * as DBVendaItem from '../repository/vendaItemRepository.js';

export async function AllVendaItensService() {
    let resposta = await DBVendaItem.ListarItensVenda()
    return resposta;
}

export async function VendaItemService(id) {
    let resposta = await DBVendaItem.ListarItemVenda(id)
    return resposta;
}

export async function NovoVendaItemService(itemVenda) {
    let resposta = await DBVendaItem.CriarItemVenda(itemVenda)
    await DBVendaItem.AtualizarTotalVenda(itemVenda.id_venda)
    return resposta;
}

export async function EditarVendaItemService(id, itemVenda) {
    let itemAnterior = await DBVendaItem.ListarItemVenda(id)
    let resposta = await DBVendaItem.EditarItemVenda(id, itemVenda)

    if (resposta > 0) {
        await DBVendaItem.AtualizarTotalVenda(itemVenda.id_venda)

        if (itemAnterior && itemAnterior.id_venda != itemVenda.id_venda) {
            await DBVendaItem.AtualizarTotalVenda(itemAnterior.id_venda)
        }
    }

    return resposta;
}

export async function ExcluirVendaItemService(id) {
    let itemVenda = await DBVendaItem.ListarItemVenda(id)
    let resposta = await DBVendaItem.ExcluirItemVenda(id)

    if (resposta > 0 && itemVenda) {
        await DBVendaItem.AtualizarTotalVenda(itemVenda.id_venda)
    }

    return resposta;
}
