const prompt = require("prompt-sync")();

let nome = prompt("Nome do Jogador: ");
let pontuacao = Number(prompt("Pontuação: "));

let pontuacaoMinima = 1000;

console.log("Analisando perfil...");

if (pontuacao >= pontuacaoMinima) {
    console.log("Aprovado! " + nome + " tem nivel para a equipe principal.")
} else {
    let pontosFaltantes = pontuacaoMinima - pontuacao;
    console.log("Reprovado! Faltam " + pontosFaltantes + " pontos para entrar no time");
}