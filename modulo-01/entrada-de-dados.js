const prompt = require('prompt-sync')();

console.log("-=-=-=-=-=-=-Cadastro de Novos Recrutas-=-=-=-=-=-=-");
let novoNome = prompt("Digite o nome do jogador: ");

console.log("O novo jogador é: ", novoNome);

let novaPontuacao = Number(prompt("Digite a pontuação desde jogador: "));

console.log("Sucesso! Jogador " + novoNome + " cadastrado com " + novaPontuacao + " pontos.");
