/*5) Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.

Write a program that calculates the Body Mass Index (BMI) of a person and determines the weight category 
(underweight, normal weight, overweight, obesity) using if-else statements.
*/

const prompt = require('prompt-sync')();

let weightInput = prompt('Enter your weight in kg / Digite seu peso em kg: ');
let heightInput = prompt('Enter your height in meters / Digite sua altura em metros: ');

let weight = Number(weightInput);
let height = Number(heightInput);

if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    console.log("Invalid input / Entrada inválida");
} else {
    let bmi = weight / (height * height);

    console.log("Your BMI is / Seu IMC é: " + bmi.toFixed(2));

    if (bmi < 18.5) {
        console.log("Underweight / Baixo peso");
    } else if (bmi < 25) {
        console.log("Normal weight / Peso normal");
    } else if (bmi < 30) {
        console.log("Overweight / Sobrepeso");
    } else {
        console.log("Obesity / Obesidade");
    }
}
