let valor = 3000;
let nome = "";
let isPago = false;
let qualquer = "";
qualquer = 22; //tipos primitivos
//Arrays
const lista = [];
lista.push(13, 22, 2, 1.8, 43);
//Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0,
};
console.log(novaTransacao);
