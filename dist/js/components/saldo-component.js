import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";

//Seletores corrigidos para bater com o meu html
const elementoSaldo = document.querySelector(".saldo-valor .cc .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");

//Atualizar a data de acesso
if (elementoDataAcesso) {
    elementoDataAcesso.textContent = formatarData(new Date(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}

let saldo = 3000; //valor inicial (temporario)

// Atualiza o display do saldo
function atualizarDisplay() {
    if (elementoSaldo) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}

// Interface pública
export function getSaldo() {
    return saldo;
}

export function atualizarSaldo(novoSaldo) {
    if (typeof novoSaldo === 'number') {
        saldo = novoSaldo;
        atualizarDisplay();
    } else {
        console.error("Valor inválido para saldo");
    }
}

// Inicialização
atualizarDisplay();