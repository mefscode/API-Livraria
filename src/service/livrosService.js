import * as DBLivro from '../repository/livrosRepository.js';

export async function AllLivrosService() {
    let resposta = await DBLivro.ListarLivros()
    return resposta;
}

export async function LivrosService(id) {
    let resposta = await DBLivro.ListarLivro(id)
    return resposta;
}

export async function NovoLivroService(livro) {
    let resposta = await DBLivro.CriarLivro(livro)
    return resposta;
}

export async function EditarLivroService(id, livro) {
    let resposta = await DBLivro.EditarLivro(id, livro)
    return resposta;
}

export async function ExcluirLivroService(id){
      let resposta = await DBLivro.ExcluirLivro(id)
      return resposta;
}