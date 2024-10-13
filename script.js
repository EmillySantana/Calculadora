

function calcularSoma() {
          
  const valor1 = parseFloat(document.getElementById('number1').value);
  const valor2 = parseFloat(document.getElementById('number2').value);

  if (isNaN(valor1) || isNaN(valor2)) {
      alert("Por favor, insira números válidos.");
      return;
  }
  const resultado = valor1 + valor2;


  alert("O resultado da soma é: " + resultado);
}
