/*
Escreva um algoritmo para ler 2 valores 
(considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

Write an algorithm to read 2 values 
(assume the values will not be equal) and print them in ascending order.
*/

const prompt = require('prompt-sync')();

let a = Number(prompt("Insert the first value / Insira o primeiro valor: "));
let b = Number(prompt("Insert the second value / Insira o segundo valor: "));

if(a > b){
    console.log(a + ";" + b)
}else{
    console.log(b + ";" + a)
}