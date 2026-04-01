let valor = Number(prompt("digite o valor da compra:"));

if (valor >= 100) {
    let desconto = valor * 0.10;
    let total = valor - desconto;

    alert("você ganhou um desconto de 10%.");
    alert("valor do desconto: R$ " + desconto.toFixed(2));
    alert("valor total com desconto: R$ " + total.toFixed(2));
} else{
    alert("desculpe-me, porem você não terá desconto")
}