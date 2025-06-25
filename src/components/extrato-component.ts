import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";

const elementoRegistrosTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarExtrato();
function renderizarExtrato(): void {
   const gruposTransacoes: GrupoTransacao[]  = Conta.getGruposTransacoes();
   elementoRegistrosTransacoesExtrato.innerHTML = "";
   let htmlRegistrosTransacoes: string = "";

   for (let GrupoTransacao of gruposTransacoes)
   {
    let htmlTransacaoItem: string = "";
    for (let transacao of GrupoTransacao.transacoes)
    {
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

const ExtratoComponent = {
    atualizar(): void {
        renderizarExtrato();
    }
}

export default ExtratoComponent;