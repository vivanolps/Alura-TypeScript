let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22; //tipos primitivos

//Arrays
const lista: number[] = [];
lista.push(13, 22, 2, 1.8, 43);

//Tipos Personalizados (Type alias)
type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
}

//Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0,
}

console.log(novaTransacao);