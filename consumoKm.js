/* faça um programa para calcular o valor gasto em combustível

Você terá 3 variáveis. Sendo elas:
Preço do combustível;
Gasto médio de combustível do carro por KM;
Distância em KM;

Imprima no console o valor gasto nessa viagem.
*/

const precoCombustivel = 5.79;
let distanciaKM = 100;
let kmPorLitros = 10 ;
let litroConsumidos = distanciaKM / kmPorLitros;
let precoTotal= precoCombustivel * litroConsumidos;


console.log( "R$ " + precoTotal.toFixed(2))