const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log(`
    --------------SISTEMA DE GAMERS--------------
    1- Cadastrar
    2- Deletar
    3- Mostrar Equipe
    4- Cálculo da Média da Equipe
    5- Atualizar Pontos
    6- Sair
    ---------------------------------------------
    \n`);
}
function mostrarEquipe() {
    if (!validaQuantidadeJogadores()) { return; }

    for (let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log(i + 1 + "." + jogador.nome + "| Função: " + jogador.funcao + "| Pontuação: " + jogador.pontuacao)
    }
}

function cadastrarJogador() {
    let nomeJogador = prompt("Jogador o nome do jogador: ").toLocaleUpperCase();
    let funcaoJogador = prompt("Digite a função no time: ");
    let pontuacaoJOgador = Number(prompt("Digite a pontuação: "));

    if (isNaN(pontuacaoJOgador)) {
        console.log("Pontuação inválida.")
    } else {
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJOgador,
        }
        time.push(recruta);
        console.log("Jogador " + nomeJogador + " foi cadastrado com sucesso");
        console.log("------------------------------");
    }

}

function deletarJogador() {
    if (!validaQuantidadeJogadores()) { return; }

    let nomeDeletado = prompt("Digite o nome a ser deletado: ").toLocaleUpperCase();
    let indexDeletado = -1;

    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
        }
    }

    if (indexDeletado === -1) {
        console.log("Jogador não encontrado.");
        return
    }

    time.splice(indexDeletado, 1);
    console.log("Jogador deletado com sucesso.");
}

function calculoDaMedia() {
    if (!validaQuantidadeJogadores()) { return; }

    let totalPontos = 0;

    for (let i = 0; i < time.length; i++) {
        totalPontos = totalPontos + time[i].pontuacao;
    }

    let mediaPontos = totalPontos / time.length;
    console.log("o time possui uma media de " + mediaPontos + " pontos.")

}

function buscarJogador(nomeDesejado) {

    console.log("Buscando por: " + nomeDesejado + "...");

    let encontrou = false;

    for (let i = 0; i < time.length; i++) {

        let jogadorAtual = time[i];

        if (jogadorAtual.nome === nomeDesejado) {

            encontrou = true;
            return jogadorAtual;
        }

    }
    if (encontrou === false) {

        console.log("O jogador " + nomeDesejado + " não faz parte da nossa equipe.");

    }

}

function atualizarPontuacao() {
    if (!validaQuantidadeJogadores()) { return; }
    let nomeAlvo = prompt("Digite o nome do jogador que você quer atualizar: ").toLocaleUpperCase();

    let jogador = buscarJogador(nomeAlvo);
    if (!jogador) { return };

    let pontosGanhados = Number(prompt("Digite quantos pontos ele ganhou: "))

    if (isNaN(pontosGanhados)) {
        console.log("Valor de pontos inválido.");
        return;
    }

    jogador.pontuacao += pontosGanhados;
    console.log("SUCESSO! A pontuação de " + jogador.nome + " subiu para " + jogador.pontuacao + " pontos");
}

function validaQuantidadeJogadores() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return false;
    }
    return true;
}

while (continuar === true) {
    mostrarMenu();
    let opcao = prompt("Digite sua opçao: ");

    switch (opcao) {
        case "1":
            cadastrarJogador();
            break;
        case "2":
            deletarJogador();
            break;
        case "3":
            mostrarEquipe();
            break
        case "4":
            calculoDaMedia();
            break
        case "5":
            atualizarPontuacao();
            break
        case "6":
            continuar = false;
            break
        default:
            console.log("Opção Inválida.")

    }
}

