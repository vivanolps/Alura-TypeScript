import { atualizarSaldo, getSaldo } from "./saldo-component.js";

const formulario = document.querySelector(".block-nova-transacao form");

if (formulario) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        
        if (!formulario.checkValidity()) {
            alert("Preencha todos os campos!");
            return;
        }

        const tipoTransacao = formulario.querySelector("#tipoTransacao").value;
        const valor = Number(formulario.querySelector("#valor").value);
        let novoSaldo = getSaldo();

        // Lógica corrigida para depósito/transferência
        if (tipoTransacao === "Depósito") {
            novoSaldo += valor; // Adiciona o valor para depósitos
        } else {
            novoSaldo -= valor; // Subtrai para outros tipos (Transferência, Pagamento, etc.)
        }

        atualizarSaldo(novoSaldo);
        formulario.reset();
        
        console.log(`Transação: ${tipoTransacao} | Valor: ${formatarMoeda(valor)} | Novo saldo: ${formatarMoeda(novoSaldo)}`);
    });
}