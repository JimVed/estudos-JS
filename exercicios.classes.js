/* 
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado
Crie um método que dado a quantidade de quilomêtros e o preço do combustível nos dê o valor gasto
em reais para realizar esse percurso
 */

class Carro{
   marca;
   cor;
   gastoPorKm; 

   constructor (marca,cor,gastoPorKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoPorKm = gastoPorKm;

   }
   calcularGasto(distancia,precoCombustivel){
    return distancia * this.gastoPorKm * precoCombustivel;
   }

}

const uno = new Carro('Fiat','Prata',1/12);
console.log( uno.calcularGasto(70,5));

const siena = new Carro('Fiat', 'Prata', 1/9,9);
console.log(siena);
console.log(siena.calcularGasto(117, 5))