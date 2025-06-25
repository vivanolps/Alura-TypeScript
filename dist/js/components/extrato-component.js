import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";
const elementoRegistrosTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistrosTransacoesExtrato.innerHTML = "";
    let htmlRegistrosTransacoes = "";
    for (let GrupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of GrupoTransacao.transacoes) {
            htmlTransacaoItem += `
                <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${transacao.tipoTransacao}</span>
                    <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                </div>
                <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
            </div>
        `;
        }
        htmlRegistrosTransacoes += `
        <div class="transacoes-group">
            <strong class="mes-group">${GrupoTransacao.label}</strong>
            ${htmlTransacaoItem}
        </div>
    `;
    }
    if (htmlRegistrosTransacoes === "") {
        htmlRegistrosTransacoes = "<div>Não há transações registradas.</div>";
    }
    elementoRegistrosTransacoesExtrato.innerHTML = htmlRegistrosTransacoes;
}
