let valorCarro = Number(prompt("Digite o valor do carro:"));
let formaPagamento = prompt("Escolha a forma de pagamento:\n1 - PIX (15% desconto)\n2 - Cartão de Crédito (até 24x, 5% juros)\n3 - Financiamento (até 48x, 20% juros)");

let valorFinal;
let parcelas;

if (formaPagamento === "1") {
    // À vista no PIX: 15% de desconto
    valorFinal = valorCarro * 0.85;
    alert("Pagamento PIX selecionado.\nValor final com 15% de desconto: R$ " + valorFinal.toFixed(2));

} else if (formaPagamento === "2") {
    // Cartão de Crédito: 5% de acréscimo
    valorFinal = valorCarro * 1.05;
    parcelas = valorFinal / 24;
    alert("Pagamento no Cartão (24x) selecionado.\nTotal com 5% de juros: R$ " + valorFinal.toFixed(2) + 
        "Valor de cada parcela: R$ " + parcelas.toFixed(2));

} else if (formaPagamento === "3") {
    // Financiamento: 20% de acréscimo
    valorFinal = valorCarro * 1.20;
    parcelas = valorFinal / 48;
    alert("Financiamento (48x) selecionado.\nTotal com 20% de juros: R$ " + valorFinal.toFixed(2) + 
        "\nValor de cada parcela: R$ " + parcelas.toFixed(2));

} else {
    alert("Opção de pagamento inválida.");
}