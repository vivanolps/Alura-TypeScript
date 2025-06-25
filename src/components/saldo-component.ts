import { formatarData, formatarMoeda} from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";

// Seletores corrigidos para corresponder ao HTML
const elementoSaldo = document.querySelector(".saldo-valor .cc .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

function renderizarSaldo(novoSaldo?: number): void {
    if (elementoSaldo !== null) {
        const saldo = novoSaldo !== undefined ? novoSaldo : Conta.getSaldo();
        elementoSaldo.textContent = formatarMoeda(saldo);
        console.log("Saldo atualizado:", elementoSaldo.textContent); // Log para depuração
    } else {
        console.error("Elemento do saldo não encontrado!");
    }        
}

if (elementoDataAcesso !== null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    console.log("Data atualizada:", elementoDataAcesso.textContent); // Log para depuração
} else {
    console.error("Elemento de data não encontrado!");
}

renderizarSaldo();

const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
}

export default SaldoComponent;