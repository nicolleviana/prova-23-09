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

var salario = parseFloat(prompt("Digite seu salário mensal: "));

