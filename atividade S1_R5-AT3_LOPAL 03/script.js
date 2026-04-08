let valorCompra = Number(prompt("Digite o valor da compra (R$):"));
let regiao = prompt("Selecione a região de entrega:\n1 - Sudeste\n2 - Sul\n3 - Outras");

let frete = 0;
let nomeRegiao = "";

// Regra Especial: Frete Grátis acima de R$ 250,00
if (valorCompra > 250) {
    frete = 0;
    alert("Parabéns! Sua compra superou R$ 250,00 e você ganhou FRETE GRÁTIS.");
} else {
    // Se não for frete grátis, verifica a região usando condicional composta
    if (regiao === "1") {
        frete = 10;
        nomeRegiao = "Sudeste";
    } else if (regiao === "2") {
        frete = 20;
        nomeRegiao = "Sul";
    } else if (regiao === "3") {
        frete = 30;
        nomeRegiao = "Outras";
    } else {
        alert("Região inválida! O frete será calculado como 'Outras'.");
        frete = 30;
    }
}

let valorTotal = valorCompra + frete;

alert(
    "Resumo do Pedido:\n" +
    "Compra: R$ " + valorCompra.toFixed(2) + "\n" +
    "Frete: R$ " + frete.toFixed(2) + "\n" +
    "--------------------------\n" +
    "Total a Pagar: R$ " + valorTotal.toFixed(2)
);