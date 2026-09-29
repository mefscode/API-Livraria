import con from "./conexão/connection.js";

export async function ListarCliente(id) {
    let command = `
       SELECT 
            nome,
            idade,
            DATE_FORMAT(data_nasc, '%d/%m/%Y') AS dataDeNascimento,
            estado,
            cidade
        FROM clientes
    WHERE id_cliente = ?
    `

    const [linhas] = await con.query(command,[id])
    return linhas[0];
}

export async function ListarTodosClientes() {
    let command = `
       SELECT 
            nome,
            idade,
            data_nasc,
            estado,
            cidade
        FROM clientes
    `

    let [linhas] = await con.query(command, []);
    return linhas;
}

export async function NovoCliente(cliente) {
    let command = `
    INSERT INTO clientes(nome, idade , data_nasc , estado , cidade)
    VALUES (?,?,?,?,?)
    `

    let [result] = await con.query(command, [
        cliente.nome,
        cliente.idade,
        cliente.data_nasc,
        cliente.estado,
        cliente.cidade
    ])

    return result.insertId;
}

export async function EditarCliente(id, cliente) {
    let command = `
    UPDATE clientes
    SET nome = ?,
    idade = ?,
    data_nasc = ?,
    estado = ?,
    cidade = ?
    WHERE id_cliente = ? 
    `

    let [resposta] = await con.query(command, [
        cliente.nome,
        cliente.idade,
        cliente.data_nasc,
        cliente.estado,
        cliente.cidade,
        id
    ])

    return resposta.affectedRows;

}

export async function ExcluirCliente(id){
    let command = `
    DELETE FROM clientes
    WHERE id_cliente = ?
    `

    let [resposta] = await con.query (command, [id]);
    return resposta.affectedRows
}