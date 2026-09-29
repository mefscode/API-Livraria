export function ErroListarVendaItem(id) {
    if (!id) {
        throw new Error("O parametro do ID é necessário para a busca");
    }

    if (isNaN(id)) {
        throw new Error("O parametro do ID é necessário ser Número");

    }
}

export function ErroCriarVendaItem(itemVenda) {
    if (!itemVenda.id_venda) {
        throw new Error("O parametro id_venda é necessário");
    }

    if (isNaN(itemVenda.id_venda)) {
        throw new Error("O parametro id_venda é necessário ser Número");
    }

    if (!itemVenda.id_livro) {
        throw new Error("O parametro id_livro é necessário");
    }

    if (isNaN(itemVenda.id_livro)) {
        throw new Error("O parametro id_livro é necessário ser Número");
    }

    if (!itemVenda.quantidade) {
        throw new Error("O parametro quantidade é necessário");
    }

    if (isNaN(itemVenda.quantidade)) {
        throw new Error("O parametro quantidade é necessário ser Número");
    }

    if (!itemVenda.preco_unitario) {
        throw new Error("O parametro preco_unitario é necessário");
    }

    if (isNaN(itemVenda.preco_unitario)) {
        throw new Error("O parametro preco_unitario é necessário ser Número");
    }
}

export function ErroAtualizarVendaItem(id, itemVenda) {
    if (!id) {
        throw new Error("O parametro do ID é necessário para a busca");
    }

    if (isNaN(id)) {
        throw new Error("O parametro do ID é necessário ser Número");
    }

    if (!itemVenda.id_venda) {
        throw new Error("O parametro id_venda é necessário");
    }

    if (isNaN(itemVenda.id_venda)) {
        throw new Error("O parametro id_venda é necessário ser Número");
    }

    if (!itemVenda.id_livro) {
        throw new Error("O parametro id_livro é necessário");
    }

    if (isNaN(itemVenda.id_livro)) {
        throw new Error("O parametro id_livro é necessário ser Número");
    }

    if (!itemVenda.quantidade) {
        throw new Error("O parametro quantidade é necessário");
    }

    if (isNaN(itemVenda.quantidade)) {
        throw new Error("O parametro quantidade é necessário ser Número");
    }

    if (!itemVenda.preco_unitario) {
        throw new Error("O parametro preco_unitario é necessário");
    }

    if (isNaN(itemVenda.preco_unitario)) {
        throw new Error("O parametro preco_unitario é necessário ser Número");
    }
}

export function ErroExcluirVendaItem(id) {
    if (!id) {
        throw new Error("O parametro do ID é necessário para a busca");
    }

    if (isNaN(id)) {
        throw new Error("O parametro do ID é necessário ser Número");
    }
}
