/*3) Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

Write a program that receives a score from 0 to 10 and uses if-else if statements to classify the result 
as "Approved", "Recuperation", or "Not Approved".
*/

const prompt = require('prompt-sync')();

let input = prompt('Send your score / Digite sua nota: ');

score = Number(input);

if(score < 0 || isNaN(score )){
    console.log("Invalid input / Entrada invalida")
}
else if(score >= 0 && score <= 4){
    console.log("Not Approved! / Reprovado !")
}
else if(score == 5){
    console.log("Recuperation / Recuperação")
}
else{
    console.log("Approved")
}