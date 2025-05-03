/*
2) Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.


Create a program that classify someone age, order by kid, teenager, adult and elderly, using 
a conditional structure if-else 

*/

// For this exercise i'll use the switch stetament 

const prompt = require('prompt-sync')();

let input = prompt('Send your age / Digite sua idade: ');

age = Number(input);

switch (true){
    case (age >= 0 && age <= 13):
        console.log("You're a kid ! / Voce é uma criança !")
        break;
    case (age > 13 && age < 18):
        console.log("You're a teenager ! / Voce é um adolescente !")
        break;
    case (age >= 18 && age < 60):
        console.log("You're an Adult ! / Voce é um Adulto !")
        break;
    case (age > 60):
        console.log("You're an elderly ! / Voce é um idoso !")
        break;
    default:
        console.log("Invalid input / Entrada invalida")
        break;
}