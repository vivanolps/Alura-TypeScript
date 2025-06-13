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
    tipoTransacao: string;
    data: Date;
    valor: number;
}

const novaTransacao: Transacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0
}