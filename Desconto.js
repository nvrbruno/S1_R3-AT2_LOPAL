// Solicita ao usuário que insira o valor da compra 
const ValorCompra = parseInt(prompt("Insira o valor da compra"));

// Verifica se o valor inserido não é um número 
if (isNaN(ValorCompra)) {
    // Caso o valor não seja um número válido, exibe uma mensagem de erro
    alert("Erro: Você não digitou um número válido!");
} else {
    // Se o valor for um número válido, verifica se ele é maior ou igual a 100
    if (ValorCompra >= 100) {
        // Calcula o valor com 10% de desconto
        const valorComDesconto = ValorCompra - (ValorCompra * 0.1);
        // Exibe uma mensagem com o valor com desconto
        alert("Parabéns! Você ganhou 10% de desconto. O total agora é: R$ " + valorComDesconto);
    } else {
        // Caso o valor da compra seja menor que 100, informa que não há desconto
        alert("Que pena! Você ainda não pode receber o desconto.");
    }
}
