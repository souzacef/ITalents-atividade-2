const prompt = require("prompt-sync")();

function cadastrarAluno() {
    console.log("=============== Bem vindo ao controle de notas! ===============\n");
    const aluno = prompt("Informe o nome do aluno. ");
    return aluno;
}

module.exports = cadastrarAluno;