const peso = 120;
const altura = 1.85;
const imc = peso / Math.pow(altura, 2)
console.log(imc);
if (imc< 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 30) {
    console.log('Peso normal');
} else if (imc >= 30 && imc < 40) {
    console.log('Obesidade');
}else {
    console.log('Obesidade grave');
}

