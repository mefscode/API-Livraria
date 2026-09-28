CREATE DATABASE livraria;
USE livraria;

CREATE TABLE clientes(
id_cliente INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100),
idade INT,
data_nasc DATE,
estado VARCHAR(2),
cidade VARCHAR(50)
);

SELECT * FROM clientes;

    INSERT INTO clientes(nome, idade , data_nasc , estado , cidade)
    VALUES ("Marcos",16,"2010-08-13","SP","São Paulo");

CREATE TABLE livros(
id_livro INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(100),
genero VARCHAR(100),
autor VARCHAR(100),
preco VARCHAR(100),
ano_pub INT
);

CREATE TABLE vendas (
id_venda INT PRIMARY KEY AUTO_INCREMENT,
id_cliente INT,
data_venda DATETIME ,
valor_total DECIMAL(10,2),

    FOREIGN KEY (id_cliente)
        REFERENCES clientes(id_cliente)
);

CREATE TABLE vendaitem (
id_vendaitem INT PRIMARY KEY AUTO_INCREMENT,
id_venda INT,
id_livro INT,
quantidade INT,
preco_unitario DECIMAL(10,2),

    FOREIGN KEY (id_venda)
        REFERENCES vendas(id_venda),

    FOREIGN KEY (id_livro)
        REFERENCES livros(id_livro)
);