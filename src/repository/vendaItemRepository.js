import con from "./conexão/connection.js";

export async function ListarItensVenda() {
    const command = `
        SELECT
            vendaitem.id_vendaitem,
            vendaitem.id_venda,
            vendaitem.id_livro,
            livros.titulo,
            vendaitem.quantidade,
            vendaitem.preco_unitario,
            (vendaitem.quantidade * vendaitem.preco_unitario)
        FROM vendaitem
        INNER JOIN livros ON livros.id_livro = vendaitem.id_livro
        ORDER BY vendaitem.id_vendaitem DESC;
    `;

    const [resposta] = await con.query(command);
    return resposta;
}

export async function ListarItemVenda(id) {
    const command = `
        SELECT
            vendaitem.id_vendaitem,
            vendaitem.id_venda,
            vendaitem.id_livro,
            livros.titulo,
            vendaitem.quantidade,
            vendaitem.preco_unitario,
            (vendaitem.quantidade * vendaitem.preco_unitario)
        FROM vendaitem
        INNER JOIN livros ON livros.id_livro = vendaitem.id_livro
        WHERE vendaitem.id_vendaitem = ?;
    `;

    const [resposta] = await con.query(command, [id]);
    return resposta[0];
}

export async function CriarItemVenda(itemVenda) {
    const command = `
        INSERT INTO vendaitem (id_venda, id_livro, quantidade, preco_unitario)
        VALUES (?, ?, ?, ?);
    `;

    const [resposta] = await con.query(command, [
        itemVenda.id_venda,
        itemVenda.id_livro,
        itemVenda.quantidade,
        itemVenda.preco_unitario
    ]);

    return resposta.insertId;
}

export async function EditarItemVenda(id, itemVenda) {
    const command = `
        UPDATE vendaitem
        SET
            id_venda = ?,
            id_livro = ?,
            quantidade = ?,
            preco_unitario = ?
        WHERE vendaitem.id_vendaitem = ?;
    `;

    const [resposta] = await con.query(command, [
        itemVenda.id_venda,
        itemVenda.id_livro,
        itemVenda.quantidade,
        itemVenda.preco_unitario,
        id
    ]);

    return resposta.affectedRows;
}

export async function ExcluirItemVenda(id) {
    const command = `
        DELETE FROM vendaitem
        WHERE vendaitem.id_vendaitem = ?;
    `;

    const [resposta] = await con.query(command, [id]);
    return resposta.affectedRows;
}

export async function AtualizarTotalVenda(idVenda) {
    const command = `
        UPDATE vendas
        SET valor_total = (
            SELECT COALESCE(SUM(vendaitem.quantidade * vendaitem.preco_unitario), 0)
            FROM vendaitem
            WHERE vendaitem.id_venda = ?
        )
        WHERE vendas.id_venda = ?;
    `;

    const [resposta] = await con.query(command, [idVenda, idVenda]);
    return resposta.affectedRows;
}
