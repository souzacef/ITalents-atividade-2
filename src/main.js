const prompt = require("prompt-sync")();
const { cadastrarMaterias, materias } = require("./funcoes/cadastrarMaterias");
const cadastrarNotas = require("./funcoes/cadastrarNotas");

console.log("========== Bem vindo ao controle de notas! ==========\n");

const aluno = prompt("Informe o nome do aluno: ");

cadastrarMaterias();
cadastrarNotas(materias);
