export function ErroListarVenda(id) {
    if (!id) {
        throw new Error("O parametro do ID é necessário para a busca");
    }

    if (isNaN(id)) {
        throw new Error("O parametro do ID é necessário ser Número");

    }
}

export function ErroCriarVenda(venda) {
    if (!venda.id_cliente) {
        throw new Error("O parametro id_cliente é necessário");
    }

    if (isNaN(venda.id_cliente)) {
        throw new Error("O parametro id_cliente é necessário ser Número");
    }

    if (!venda.data_venda) {
        throw new Error("O parametro data_venda é necessário");
    }
}

export function ErroAtualizarVenda(id, venda) {
    if (!id) {
        throw new Error("O parametro do ID é necessário para a busca");
    }

    if (isNaN(id)) {
        throw new Error("O parametro do ID é necessário ser Número");
    }

    if (!venda.id_cliente) {
        throw new Error("O parametro id_cliente é necessário");
    }

    if (isNaN(venda.id_cliente)) {
        throw new Error("O parametro id_cliente é necessário ser Número");
    }

    if (!venda.data_venda) {
        throw new Error("O parametro data_venda é necessário");
    }
}

export function ErroExcluirVenda(id) {
    if (!id) {
        throw new Error("O parametro do ID é necessário para a busca");
    }

    if (isNaN(id)) {
        throw new Error("O parametro do ID é necessário ser Número");
    }
}