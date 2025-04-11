// Solicita ao usuário que digite a idade 
let Idade = parseInt(prompt("Digite a sua idade:"));

// Define a idade mínima para ser considerado maior de idade
let MaiorDeIdade = 18;

// Verifica se o valor digitado é um número válido
if (isNaN(Idade)) {
    // Se não for um número, exibe uma mensagem de erro
    alert("Erro: Você não digitou um número válido!");
} else {
    // Se for um número, verifica se a idade é maior ou igual a 18
    if (Idade >= MaiorDeIdade) {
        // Se sim, exibe que a pessoa é maior de idade
        alert("Você é maior de idade!");
    } else {
        // Caso contrário, exibe que a pessoa é menor de idade
        alert("Você é menor de idade!");
    }
}

