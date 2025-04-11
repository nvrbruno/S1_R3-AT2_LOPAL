// Solicita ao usuário que insira um número 
const NumeroUsuario = parseInt(prompt("Insira o número para saber se ele é múltiplo de 5"));

// Verifica se o valor digitado não é um número válido
if (isNaN(NumeroUsuario)) {
    // Se o valor for inválido exibe uma mensagem de erro
    alert("Erro: Você não digitou um número válido!");
} else {
    // Se o número for válido, verifica se é múltiplo de 5 usando o operador módulo (%)
    if (NumeroUsuario % 5 === 0) {
        // Se o resto da divisão por 5 for 0, então é múltiplo de 5
        alert("O seu número é um múltiplo de 5!");
    } else {
        // Caso contrário, o número não é múltiplo de 5
        alert("Que pena! O seu número não é um múltiplo de 5!");
    }
}
