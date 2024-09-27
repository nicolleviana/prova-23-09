/*
 Elabore um programa que receba o salário bruto mensal de um funcionário e apresente a faixa e valor do desconto de INSS e IRRF e o valor liquido do salário baseado na seguinte tabela:

INSS (Instituto Nacional do Seguro Social):
Até R$ 1.302,00: 7,5%
De R$ 1.302,01 até R$ 2.571,29: 9%
De R$ 2.571,30 até R$ 3.856,94: 12%
Acima de R$ 3.856,94: 14%

IRRF (Imposto de Renda Retido na Fonte):
Até R$ 1.903,98: Isento
De R$ 1.903,99 até R$ 2.826,65: 7,5%
De R$ 2.826,66 até R$ 3.751,05: 15%
De R$ 3.751,06 até R$ 4.664,68: 22,5%
Acima de R$ 4.664,68: 27,5%
*/

var salario = parseFloat (prompt("Digite o valor de seu SALÁRIO BRUTO MENSAL: R$ "));

var faixaInss = "==== INSS - Instituto Nacional de Seguro Social ====\n";
faixaInss += " Número | Salário | Desconto \n";
faixaInss += " 1  | Até R$ 1.302.00 | 7,5% \n";
faixaInss += " 2  | De R$ 1.302.01 até R$ 2.571.29 | 9% \n";
faixaInss += " 3  | De R$ 2.571.30 até R$ 3.856.94 | 12% \n";
faixaInss += " 4  | Acima de R$ 3.856,94 | 14% \n";

var numeroINSS = parseInt(prompt(faixaInss));

var descontoINSS = 0;

var inss1 = 7.5 / 100 * salario;
var inss2 = 9 / 100 * salario;
var inss3 = 12 / 100 * salario;
var inss4 = 14 / 100 * salario; 

if(numeroINSS == 1){
    descontoINSS = salario - inss1;
}else if (numeroINSS == 2 ){
    descontoINSS = salario - inss2;
}else if (numeroINSS == 3 ){
    descontoINSS = salario - inss3;
}else if (numeroINSS == 4 ){
    descontoINSS = salario - inss4;
}

console.log ("Seu salário se encaixa na faixa " + [numeroINSS] + " e o desconto foi de:R$ " + descontoINSS);

var faixaIRRF = "==== IRRF - Imposto de Renda Retido na Fonten ====\n";
faixaIRRF += "Número | Salário | Desconto \n";
faixaIRRF += "1 | Até R$ 1.903,98 | insento \n";
faixaIRRF += "2 | De R$ 1.903,99 até R$ 2.826,65 | 7,5% \n";
faixaIRRF += "3 | De R$ 2.826,66 até R$ 3.751,05 | 15% \n";
faixaIRRF += "4 | De R$ 3.751,06 até R$ 4.664,68 | 22,5% \n";
faixaIRRF += "5 | Acima de R$ 4.664,68 | 27,5% \n";

var numeroIRRF = parseInt(prompt(faixaIRRF));

var irrf2 = 7.5 / 100 * salario;
var irrf3 = 15 / 100 * salario;
var irrf4 = 22.5 / 100 * salario;
var irrf5 = 27.5 / 100 * salario; 

var descontoIRRF = 0;

if(numeroIRRF == 1){
    descontoIRRF = salario ;
}else if (numeroIRRF == 2 ){
    descontoIRRF = salario - irrf2;
}else if (numeroIRRF == 3 ){
    descontoIRRF = salario - irrf3;
}else if (numeroIRRF == 4 ){
    descontoIRRF = salario - irrf4;
}else if (numeroIRRF == 5 ){
    descontoIRRF = salario - irrf5;
}

console.log ("Seu salário se encaixa na faixa " + [numeroIRRF] + " e o desconto foi de:R$ " + descontoIRRF);

var descontoTotal = (descontoINSS + descontoIRRF) - salario;

console.log ("Seu salário líquido é: R$" + descontoTotal);