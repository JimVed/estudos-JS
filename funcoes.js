function EscrevaNome(nome) {
    return  nome;
}


EscrevaNome('Jim');

/* Veririficar se é maior de idade */

function MaiorIdade(idade) {
    if (idade < 18) {
         console.log(EscrevaNome('Jim') + ' é menor de idade')
         }else {console.log('Maior de Idade')}

}

MaiorIdade(17);