
let peso = Number(prompt("Digite seu peso em kg:"));
let altura = Number(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);

alert("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    alert("Classificação: Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    alert("Classificação: Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    alert("Classificação: Sobrepeso");
} else if (imc >= 30) {
    alert("Classificação: Obesidade");
} else {
    alert("Valor de IMC inválido");
}