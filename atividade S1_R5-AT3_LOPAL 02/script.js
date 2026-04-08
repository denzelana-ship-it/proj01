let valorPedido = Number(prompt("Digite o valor total do seu pedido (R$):"));
let mensagemFinal = "";

if (valorPedido > 50) {
    // Se o valor for maior que 50, entramos na verificação do Cartão Fidelidade
    let temFidelidade = prompt("O valor superou R$ 50,00! Você possui Cartão Fidelidade? (sim/nao)").toLowerCase();

    if (temFidelidade === "sim") {
        let desconto = valorPedido * 0.10; // Calcula 10%
        valorPedido = valorPedido - desconto;
        mensagemFinal = "Desconto de 10% aplicado! Valor a pagar: R$ " + valorPedido.toFixed(2);
    } else {
        mensagemFinal = "Valor a pagar: R$ " + valorPedido.toFixed(2) + "\nBrinde: Você ganhou um Cookie de brinde!";
    }

} else {
    // Se o valor for 50 ou menor
    mensagemFinal = "Valor a pagar: R$ " + valorPedido.toFixed(2) + "\n(Brindes e descontos apenas para compras acima de R$ 50,00)";
}

alert(mensagemFinal);