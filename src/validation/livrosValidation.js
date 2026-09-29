export function ErroListarLivro(id) {
    if (!id) {
        throw new Error("O parametro do ID é necessário para a busca");
    }

    if (isNaN(id)) {
        throw new Error("O parametro do ID é necessário ser Número");

    }
}

export function ErroCriarLivro(livro) {
    if (!livro.titulo) {
        throw new Error("O parametro de titulo é obrigatório ");
    }
    if (!livro.genero) {
        throw new Error("O parametro de genero é obrigatório");
    }

    if (!livro.autor) {
        throw new Error("O parametro de autor é obrigatório");
    }

    if (!livro.preco) {
        throw new Error("O parametro de preco é obrigatório");
    }

    if (!livro.ano_pub) {
        throw new Error("O parametro de ano de publicação é obrigatório");
    }

    if (isNaN(livro.ano_pub)) {
        throw new Error("O parametro de ano de publicação é obrigatório ser Número");

    }

}

export function ErroAtualizarLivro(id, livro) {
    if (!id) {
        throw new Error("O parametro do ID é necessário para a busca");
    }

    if (isNaN(id)) {
        throw new Error("O parametro do ID é necessário ser Número");

    }

    if (!livro.titulo) {
        throw new Error("O parametro de titulo é obrigatório ");
    }
    if (!livro.genero) {
        throw new Error("O parametro de genero é obrigatório");
    }

    if (!livro.autor) {
        throw new Error("O parametro de autor é obrigatório");
    }

    if (!livro.preco) {
        throw new Error("O parametro de preco é obrigatório");
    }

    if (!livro.ano_pub) {
        throw new Error("O parametro de ano de publicação é obrigatório");
    }

    if (isNaN(livro.ano_pub)) {
        throw new Error("O parametro de ano de publicação é obrigatório ser Número");

    }
}

export function ErroExcluirLivro(id) {
    if (!id) {
        throw new Error("O parametro do ID é necessário para a busca");
    }

    if (isNaN(id)) {
        throw new Error("O parametro do ID é necessário ser Número");

    }
}