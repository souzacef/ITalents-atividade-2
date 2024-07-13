const prompt = require("prompt-sync")();

const { cadastrarMaterias, materias } = require("./funcoes/cadastrarMaterias");
const cadastrarNotas = require("./funcoes/cadastrarNotas");
const calcularMedia = require("./funcoes/calcularMedia");

console.log("========== Bem vindo ao controle de notas! ==========\n");

const aluno = prompt("Informe o nome do aluno: ");

cadastrarMaterias();
const notas = cadastrarNotas(materias);
const medias = calcularMedia(notas);

console.log("\n===== Médias das matérias: =====\n");

for (const materia in medias) {

    console.log(`${materia}: ${medias[materia].toFixed(2)}`);

}

console.log("");
