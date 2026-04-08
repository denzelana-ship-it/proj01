let salario = Number(prompt("Digite o valor do seu salário (R$):"));
let valorParcela = Number(prompt("Digite o valor da parcela que deseja pagar (R$):"));

// Cálculo do limite (30% do salário)
let limitePermitido = salario * 0.30;

// Condicional Composta para decisão
if (valorParcela > limitePermitido) {
    alert(
        "Empréstimo Negado: Parcela muito alta!\n\n" +
        "Seu limite de parcela é: R$ " + limitePermitido.toFixed(2) + "\n" +
        "A parcela desejada de R$ " + valorParcela.toFixed(2) + " excede 30% do seu salário."
    );
} else {
    alert(
        "Empréstimo Pré-aprovado!\n\n" +
        "A parcela de R$ " + valorParcela.toFixed(2) + " está dentro do seu limite de R$ " + limitePermitido.toFixed(2) + "."
    );
}