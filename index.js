// Função para realizar operações matemáticas básicas
function calcular(num1, num2, operacao) {
  let resultado;

  switch (operacao) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num2 !== 0 ? num1 / num2 : 'Divisão por zero não é permitida';
      break;
    default:
      resultado = 'Operação indevida';
  }

  return resultado;
}

// Exemplo de uso
console.log(calcular(10, 5, '+')); // Resultado: 15
