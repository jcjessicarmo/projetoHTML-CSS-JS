/* Exemplo ao vivo - Conversor de moedas
var valorEmDolar = 64;
var cotacaoDoDolar = 5.32;

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert("R$ " + valorEmReal);
*/


/* Desafio 01 */
var digiteSeuNome = prompt("Olá, digite o seu nome:");
console.log(digiteSeuNome);
alert("Seja bem vinda(o) ao Imersão Dev " + digiteSeuNome);


/* Desafio 02 */
var valorEmDolar = prompt("Digite o valor em dolar: ");
var cotacaoDoDolar = 5.32;

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert("O valor em real é: R$ " + valorEmReal);

var valorEmEuro = prompt("Digite o valor em euro: ");
var cotacaoDoEuro = 5.55;

var valorEmReal2 = valorEmEuro * cotacaoDoEuro;
valorEmReal2 = valorEmReal2.toFixed(2);
alert("O valor em real é: R$ " + valorEmReal2);

// Melhorar o código com a opção de selecionar o tipo de cotação.






