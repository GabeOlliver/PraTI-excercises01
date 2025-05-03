/* 
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.

Create a interactive menu on the terminal that give an user three options using a switch-case 
to implement the logic.
*/

const prompt = require('prompt-sync')();

console.log("SIMPLE CALCULATOR 2000!")

let input = prompt("Chose a number / Escolha um número: ")

num = Number(input);

if(isNaN(num)){
    console.log("Invalid input / Entrada invalida.")
    process.exit(0);
}

let opt;

do{

    console.log();
    console.log("Chose an option btw 1 - 4 / Escolha uma opção entre 1 e 4");
    console.log("1 - Multiply your number by 2 / Multiplicar seu numero por 2");
    console.log("2 - Multiply your number by 5 / Multiplicar seu numero por 5");
    console.log("3 - Divide your number by 2 / Dividir seu numero por 2");
    console.log("4 - EXIT Program / Encerrar o programa");

    let input = prompt();

    opt = Number(input);

    switch(opt){
        case 1:
            num = (num * 2);
            console.log("your number is now : " + num);
            break;
        case 2:
            num = (num * 5);
            console.log("your number is now : " + num);
            break;
        case 3:
            num = (num / 2);
            console.log("your number is now : " + num);
            break; 
        case 4:
            console.log("Exiting the program / Encerrando o programa")
            break;
        default:
            console.log("Invalid Input / Entrada Invalida")               
    }

}while(opt != 4)
