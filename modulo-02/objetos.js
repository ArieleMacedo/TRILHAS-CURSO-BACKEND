// Criando o objeto (A Ficha do Jogador) 

let jogadorEstrela = {

    nome: "Fallen",

    funcao: "Capitão / Atirador",

    pontuacao: 2500,

    estaAtivo: true

};

// Acessando as informações com o uso do ponto (.) 

console.log("--- PERFIL DO ATLETA ---");

console.log("Nome: " + jogadorEstrela.nome);

console.log("Rota de Jogo: " + jogadorEstrela.funcao);

// Podemos até alterar uma propriedade específica
jogadorEstrela.pontuacao = jogadorEstrela.pontuacao + 100;
console.log("Nova pontuação após a final: " + jogadorEstrela.pontuacao);