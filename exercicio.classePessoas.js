/*
2 - Crie uma classe para representar pessoas.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = Peso/ (altura*altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC(){
        return this.peso / (this.altura * this.altura);

    }
    classificarIMC(){
        const imc = this.calcularIMC();
        if (imc< 18.5) {
           return('Abaixo do peso');

        } else if (imc >= 18.5 && imc < 30) {
           return('Peso Normal');

        } else if (imc >= 30 && imc < 40) {
            return('Obesidade');

        }else {
           return('Obesidade grave');
        }
        

        
    }
}
const jose = new Pessoa ('Jose', 70, 1.75);
console.log(jose.calcularIMC());
console.log(jose.classificarIMC());

const fabio = new Pessoa ('Fabio', 118,1.85);
console.log(fabio.calcularIMC());
console.log(fabio.classificarIMC());

const clara = new Pessoa ('clara', 106,1.77);
console.log(clara.calcularIMC());
console.log(clara.classificarIMC());
