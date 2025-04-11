// Solicita ao usuário que digite um número 
let NumeroUsuario = parseFloat(prompt("Escreva um número para saber se ele é positivo ou negativo"));

// Verifica se o valor digitado não é um número 
if (isNaN(NumeroUsuario)) {
    // Se não for um número válido, exibe uma mensagem de erro
    alert("Erro: Você não digitou um número válido!");
} else {
    // Se for um número válido, verifica se é maior ou igual a zero
    if (NumeroUsuario >= 0) {
        // Se for zero ou positivo, exibe que o número é positivo
        alert("Seu número é positivo");
    } else {
        // Se for menor que zero, exibe que o número não é positivo 
        alert("Seu número não é positivo");
    }
}
