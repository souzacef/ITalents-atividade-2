const prompt = require("prompt-sync")();

const { cadastrarMaterias, materias } = require("./funcoes/cadastrarMaterias");
const cadastrarNotas = require("./funcoes/cadastrarNotas");
const calcularMedia = require("./funcoes/calcularMedia");
const cadastrarEContarFaltas = require("./funcoes/cadastrarEContarFaltas");

console.log("=============== Bem vindo ao controle de notas! ===============\n");

const aluno = prompt("Informe o nome do aluno: ");

cadastrarMaterias();
const notas = cadastrarNotas(materias);
const medias = calcularMedia(notas);
const { faltas, reprovadoPorFaltas } = cadastrarEContarFaltas(materias);

console.log("\n===== Médias das matérias: =====\n");

for (const materia in medias) {

    console.log(`${materia}: ${medias[materia].toFixed(2)}`);

}

console.log("\n===== Faltas das matérias: =====");

for (const materia in faltas) {
    console.log(`${materia}: ${faltas[materia]}`);
}

if (reprovadoPorFaltas) {
    console.log("\nO aluno está reprovado por faltas!");
} else {
    console.log("\nO aluno não está reprovado por faltas!");
}


