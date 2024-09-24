/* 
Análise de Desempenho Escolar: Desenvolva um algoritmo que leia as notas de 4 bimestres de um aluno e calcule a média. Informe se o aluno foi aprovado (média ≥ 7), em recuperação (5 ≤ média < 7) ou reprovado (média < 5)
*/

var nota1 = parseFloat(prompt("Digite a nota do primeiro bimestre: "));
var nota2 = parseFloat(prompt("Digite a nota do segundo bimestre: "));
var nota3 = parseFloat(prompt("Digite a nota do terceiro bimestre: "));
var nota4 = parseFloat(prompt("Digite a nota do quarto bimestre: "));

soma = nota1 + nota2 + nota3 + nota4;
divisao = soma / 4; 

if(divisao >= 7 ){
    console.log("O aluno foi aprovado!");
}else if(divisao > 5 ){
    console.log("O aluno está em recuperação!");
}else if(divisao > 0 ){
    console.log("O aluno está reprovado!");
}