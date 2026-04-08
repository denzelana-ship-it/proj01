let preco = 40;
let idade = parseInt(prompt("Digite sua idade:"));
let estudante = prompt("você é estudante? (sim/não)");

if (isNaN)(idade) || idade <= 0) {
    alert("idade invalida!");
} else {

    if (idade < 12 || idade > 60 || estudante.toLocaleLowerCase() === "sim") {
        preco = 20;
    }

    alert('valor do ingresso: R$ ${preco.tofixed(2)}');