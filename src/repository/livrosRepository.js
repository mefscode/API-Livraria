import con from "./conexão/connection.js";

export async function ListarLivros() {
    let command = `
SELECT 
titulo,
genero,
autor,
preco,
ano_pub
 FROM livros;
    `

    let [linhas] = await con.query(command, []);
    return linhas;
}

export async function ListarLivro(id) {
    let command = `
    SELECT
    titulo,
    genero,
    autor,
    preco,
    ano_pub
    FROM livros
    WHERE id_livro = ?
    `

    let [linhas] = await con.query(command, [id]);
    return linhas[0];
}

export async function CriarLivro(livro) {
    let command = `
    INSERT INTO livros(titulo,genero,autor,preco,ano_pub)
    VALUES(?,?,?,?,?)
    `

    let [resposta] = await con.query(command, [
        livro.titulo,
        livro.genero,
        livro.autor,
        livro.preco,
        livro.ano_pub
    ])

    return resposta.insertId;
}

export async function EditarLivro(id, livro) {
    let command = `
UPDATE livros
SET
  titulo = ?,
    genero = ?,
    autor = ?,
    preco = ?,
    ano_pub = ?
WHERE id_livro = ?
`
    let [resposta] = await con.query(command, [
        livro.titulo,
        livro.genero,
        livro.autor,
        livro.preco,
        livro.ano_pub,
        id
    ])

    return resposta.affectedRows;

}

export async function ExcluirLivro(id) {
    let command = `
DELETE FROM livros
WHERE id_livro = ?
`

    let resposta = await con.query(command, [id])
    return resposta.insertId;

}