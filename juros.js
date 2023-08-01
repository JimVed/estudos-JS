/* 
    Cálculo de preço da roupa
    1- Débito = desconto de 10%
    2- Dinheiro ou pix = desconto de 15%
    3- Cartão de crédito em até 2x = Preço da etiqueta
    4- Parcelamento>2x= Preço da Etiqueta + 10% Juros 
*/


const precoEtiqueta = 100;
const formaDePagamento = 2;
function CalcularDesconto (valor, desconto){

    if (formaDePagamento === 1) {
        return(precoEtiqueta - (precoEtiqueta * 0.1));
    } else if (formaDePagamento === 2) {
        return(precoEtiqueta - precoEtiqueta * 0.15);
    } else if (formaDePagamento === 3) {
        return(precoEtiqueta);
    } else {
        return(precoEtiqueta + (precoEtiqueta * 0.1));
    }
}

console.log(CalcularDesconto())
