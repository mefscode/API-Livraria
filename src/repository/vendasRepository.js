import con from "./conexão/connection.js";

export async function ListarVendas() {
    const command = `
        SELECT
            vendas.id_venda,
            vendas.id_cliente,
            clientes.nome,
            vendas.data_venda,
            vendas.valor_total
        FROM vendas
        INNER JOIN clientes ON clientes.id_cliente = vendas.id_cliente
        ORDER BY vendas.id_venda DESC;
    `;

    const [resposta] = await con.query(command);
    return resposta;
}

export async function ListarVenda(id) {
    const command = `
        SELECT
            vendas.id_venda,
            vendas.id_cliente,
            clientes.nome,
            vendas.data_venda,
            vendas.valor_total
        FROM vendas
        INNER JOIN clientes ON clientes.id_cliente = vendas.id_cliente
        WHERE vendas.id_venda = ?;
    `;

    const [resposta] = await con.query(command, [id]);
    return resposta[0];
}

export async function CriarVenda(venda) {
    const command = `
        INSERT INTO vendas (id_cliente, data_venda, valor_total)
        VALUES (?, ?, 0.00);
    `;

    const [resposta] = await con.query(command, [
        venda.id_cliente,
        venda.data_venda
    ]);

    return resposta.insertId;
}

export async function EditarVenda(id, venda) {
    const command = `
        UPDATE vendas
        SET
            id_cliente = ?,
            data_venda = ?
        WHERE vendas.id_venda = ?;
    `;

    const [resposta] = await con.query(command, [
        venda.id_cliente,
        venda.data_venda,
        id
    ]);

    return resposta.affectedRows;
}

export async function ExcluirVenda(id) {
    const command = `
        DELETE FROM vendas
        WHERE vendas.id_venda = ?;
    `;

    const [resposta] = await con.query(command, [id]);
    return resposta.affectedRows;
}