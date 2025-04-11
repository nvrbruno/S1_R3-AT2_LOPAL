// Pede ao usuário para digitar um número
let NumeroUsuario = parseFloat(prompt("Escreva um número para saber se ele é par ou impar:"));

// Verifica se o valor digitado não é um número válido
if (isNaN(NumeroUsuario)) {
    // Se não for um número, mostra mensagem de erro
    alert("Erro: Você não digitou um número válido!");
} else {
    // Se for número, verifica se é par usando o operador módulo (%)
    if (NumeroUsuario % 2 === 0) {
        // Se o resto da divisão por 2 for 0, é par
        alert("Seu número é par");
    } else {
        // Se o resto for diferente de 0, é ímpar
        alert("Seu número é ímpar");
    }
}
