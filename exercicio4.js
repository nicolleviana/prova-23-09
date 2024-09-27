/*Apresente o Menu de Lanches:
1 -> X-SALADA-> R$ 20,00
2 -> X-BACON-> R$ 25,00
3 -> X-TUDO-> R$ 23,00
4 -> BAURU -> R$ 29,99
5 -> AMERICANO -> 22,50
*/

var menuLanche = "==== Escolha seu Lanche ====\n"
menuLanche = menuLanche + "codigo | nome | preço\n"
menuLanche += "1 | X-SALADA R$ 20,00\n"
menuLanche += "2 | X-BACON R$ 25,00\n"
menuLanche += "3 | X-TUDO R$ 23,00\n"
menuLanche += "4 | BAURU R$ 29,99\n"
menuLanche += "5 | AMERICANO 22,50\n"
menuLanche += "\nDigite o número do lanche escolhido:"

var codigo = parseInt(prompt(menuLanche));
var quantidadeLanche = parseFloat(prompt("Digite quantos lanches você deseja: "));
var totalLanche = 0;

if(codigo == 1){
totalLanche = quantidadeLanche * 20.00;
}else if(codigo == 2){
totalLanche = quantidadeLanche * 25.00;
}else if(codigo == 3){
totalLanche = quantidadeLanche * 23.00;
}else if(codigo == 4){
totalLanche = quantidadeLanche * 29.99;
}else if(codigo == 5){
totalLanche = quantidadeLanche * 22.50;
}else{
console.log("Digite um codigo Valído");
}

console.log("foram pedidos: " + quantidadeLanche );
console.log("O valor do seu pedido foi de: R$ " + totalLanche);

/*Apresente o Menu de Bebidas:
Refrigerante Lata -> R$ 5,00
Refrigerante 2L -> R$ 10,00
Agua -> R$ 3,50
Suco -> R$ 7,50
*/

var menuBebida = "==== Escolha sua Bebida ====\n"
menuBebida = menuBebida + "Numero | Nome | Preço\n"
menuBebida += "1 | Refrigerante Lata | R$ 5,00\n"
menuBebida += "2 | Refrigerante 2L | R$ 10,00\n"
menuBebida += "3 | Agua | R$ 3,50\n"
menuBebida += "4 | Suco | R$ 7,50\n"
menuBebida += "\nDigite o número da Bebida escolhida:"

var Numero = parseInt(prompt(menuBebida));
var quantidadeBebida = parseFloat(prompt("Digite quantas bebidas você deseja: "));
totalBebida = 0;

if(Numero == 1){
totalBebida = quantidadeBebida * 5.00;
}else if(Numero == 2){
totalBebida = quantidadeBebida * 10.00;
}else if(Numero == 3){
totalBebida = quantidadeBebida * 3.50;
}else if(Numero == 4){
totalBebida = quantidadeBebida * 7.50;
}else if(Numero == 5){
totalBebida = quantidadeBebida * 18.00;
}else if(Numero == 6){
totalBebida = quantidadeBebida * 12.50;
}else{
console.log("Digite um código Valido:")
}


console.log("Foram pedidas: " + quantidadeBebida)
console.log("O valor do seu pedido foi de: R$ " + totalBebida)

/* apresente as formas de pagamento:
PIX - 10% de desconto.
Dinheiro - 5% de desconto.
Débito - 3% de desconto.
Crédito - sem desconto.
Apresente todos os dados da compras, com seus calculos e valores;
*/

var pagamento = "==== Formas de Pagamento ====\n"

pagamento += "Opção 1 | PIX - 10% de desconto\n"
pagamento += "Opção 2 | Dinheiro - 5% de desconto\n"
pagamento += "opção 3 | Débito - 3% de desconto\n"
pagamento += "Opção 4 | Crédito - sem desconto\n"

var formas = parseFloat(prompt(pagamento));
var valorTotal = totalBebida + totalLanche;
var valor = 0 ;

var porcentagem10 = 10 / 100 * valorTotal;
var porcentagem5 = 5 / 100 * valorTotal;
var porcentagem3 = 3 / 100 * valorTotal;


if(formas == 1){
valor = valorTotal - porcentagem10;
console.log ("O valor total a ser pago é: " + valor);
}else if(formas == 2){
valor = valorTotal - porcentagem5;
console.log ("O valor total a ser pago é: " + valor);
}else if(formas == 3){
valor = valorTotal - porcentagem3;
console.log ("O valor total a ser pago é: " + valor);
}else if(formas == 4){
valor = valorTotal;
console.log ("O valor total a ser pago é: " + valor);
}else{
console.log("Escolha uma forma de pagamentos Valida :");
}

