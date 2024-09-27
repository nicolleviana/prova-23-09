/*
1) Calculadora de Imposto de Renda: Crie um programa que leia a renda anual de um usuário e calcule o imposto a ser pago com base nas faixas: até R$ 22.847,76 (isento), de R$ 22.847,77 a R$ 33.919,80 (7,5%), de R$ 33.919,81 a R$ 45.012,60 (15%) e acima (22,5%). Apresente o valor digitado e o valor do imposto a ser pago.
*/

var rendaAnual = parseFloat(prompt("Digite sua renda anual: "));
var total = 0;
var opcao1 = renda * 0.075 ;
var opcao2 = renda * 0.15;
var opcao3 = renda * 0.225;
var renda = 0
renda = rendaAnual
if(rendaAnual < 22.847,76){
    console.log("Você é insento!");
}else if(renda < 33919.81){
    total = renda + opcao1;
    console.log("O imposto a ser pago é: " + total);
}else if(renda < 45012.60){
    total = renda + opcao2;
    console.log("O imposto a ser pago é: " + total);
}else if(renda > 45012.61){
    total = renda + opcao3;
    console.log("O imposto a ser pago é: " + total);
}