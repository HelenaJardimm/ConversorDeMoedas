## Descrição Geral do Projeto  
Objetivo: O principal objetivo deste projeto é que um grupo de estudantes desenvolva uma aplicação web simples para conversão de moedas. Essa aplicação vai permitir que os usuários insiram um valor em uma moeda e recebam o valor convertido em outra moeda, usando taxas de câmbio definidas diretamente no código.  

Tecnologias a serem utilizadas:  
HTML5: Para estruturar a página da aplicação, criando formulários e elementos visuais.  
CSS3: Para estilizar a página, tornando-a visualmente atraente e fácil de usar.  
JavaScript (puro): Para implementar a lógica de conversão de moedas, permitindo que a aplicação funcione interativamente.   

## Constante exchangeRates
Aqui, estamos declarando uma constante chamada exchangeRates, que armazena as taxas de câmbio entre diferentes moedas.  
O uso da palavra-chave const significa que a variável não pode ser reatribuída, ou seja, as taxas de câmbio são fixas.  
2. Estrutura de Dados:  
A estrutura usada é um objeto JavaScript. Cada chave desse objeto representa uma moeda (USD, BRL, EUR).
Cada moeda tem um valor associado que é outro objeto, contendo as taxas de câmbio em relação a outras moedas.
3. Exemplos de Taxas de Câmbio:   
USD (Dólar Americano):  
Para 1 USD, você recebe 5.30 BRL (Reais) e 0.85 EUR (Euros).  
BRL (Real Brasileiro):  
Para 1 BRL, você recebe 0.19 USD e 0.16 EUR.  
EUR (Euro):  
Para 1 EUR, você recebe 1.18 USD e 6.20 BRL.  
## Resumo:
Esse código define uma tabela de conversão de moedas, onde cada moeda tem suas respectivas taxas de câmbio em relação a outras moedas. Essa estrutura é útil para realizar a conversão de valores na aplicação web, permitindo que o JavaScript acesse rapidamente as taxas de câmbio necessárias para calcular o valor convertido quando o usuário faz uma solicitação.  

![print-1](img/print-1)   