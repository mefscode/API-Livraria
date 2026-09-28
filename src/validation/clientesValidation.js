export function ErroListarCliente(id) {
    if (!id) {
        throw new Error("O parametro do ID é necessário para a busca");
    }

    if (isNaN(id)) {
        throw new Error("O parametro do ID é necessário ser Número");

    }
}

export function ErroCriarCliente(cliente) {

    if (!cliente.nome) {
        throw new Error("O parametro de nome é necessário");
    }

    if (!cliente.idade) {
        throw new Error("O parametro de idade é necessário");
    }

    if (isNaN(cliente.idade)) {
        throw new Error("O parametro de idade é necessario ser Número");
    }

    if (!cliente.data_nasc) {
        throw new Error("O parametro de Data de nascimento é necessário");
    }

    if (!cliente.estado) {
        throw new Error("O parametro de Estado é obrigatório");
    }

    if (!cliente.cidade) {
        throw new Error("O parametro de Cidade é obrigatório");

    }

}

export function ErroAtualizarCliente(id, cliente) {
    if (!id) {
        throw new Error("O parametro ID é necessário");
    }

    if (isNaN(id)) {
        throw new Error("O parametro ID é necessário ser Número");
    }

    if (!cliente.nome) {
        throw new Error("O parametro de nome é necessário");
    }

    if (!cliente.idade) {
        throw new Error("O parametro de idade é necessário");
    }

    if (isNaN(cliente.idade)) {
        throw new Error("O parametro de idade é necessario ser Número");
    }

    if (!cliente.data_nasc) {
        throw new Error("O parametro de Data de nascimento é necessário");
    }

    if (!cliente.estado) {
        throw new Error("O parametro de Estado é obrigatório");
    }

    if (!cliente.cidade) {
        throw new Error("O parametro de Cidade é obrigatório");

    }
}

export function ErroExcluirCliente(id) {
    if (!id) {
        throw new Error("O parametro ID é necessário");
    }

    if (isNaN(id)) {
        throw new Error("O parametro ID é necessário ser Número");
    }
}