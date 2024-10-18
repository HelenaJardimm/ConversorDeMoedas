// Taxas de câmbio fixas
const exchangeRates = {
    USD: { BRL: 5.30, EUR: 0.85 },
    BRL: { USD: 0.19, EUR: 0.16 },
    EUR: { USD: 1.18, BRL: 6.20 }
   };
   // Função para calcular conversão de moedas
   function convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) return amount; // Conversão direta
    return amount * exchangeRates[fromCurrency][toCurrency];
   }
   // Referências aos elementos do DOM
   const form = document.getElementById('currency-form');
   const amountInput = document.getElementById('amount');
   const fromCurrencySelect = document.getElementById('from-currency');
   const toCurrencySelect = document.getElementById('to-currency');
   const resultDisplay = document.getElementById('conversion-result');
   // Evento de submissão do formulário
   form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Pegando os valores inseridos pelo usuário
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    // Validando o valor inserido
    if (isNaN(amount) || amount <= 0) {
      resultDisplay.textContent = 'Por favor, insira um valor válido.';
      return;
    }
    // Calculando a conversão
    const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    // Exibindo o resultado
    resultDisplay.textContent = `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
   });
   // Evento de reset do formulário
   form.addEventListener('reset', function() {
    resultDisplay.textContent = ''; // Limpar resultado ao redefinir
   });