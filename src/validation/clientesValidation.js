export default function ErroListarCliente(id){
    if(!id){
        let erro = throw new Error("O parametro do ID é necessário para a busca");
    }

    if(isNaN(id)){
        throw new Error("O parametro do ID é necessário ser Número");
        
    }
}