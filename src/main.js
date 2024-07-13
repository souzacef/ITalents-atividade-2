const prompt = require("prompt-sync")();

const { cadastrarMaterias, materias } = require("./funcoes/cadastrarMaterias");
const cadastrarNotas = require("./funcoes/cadastrarNotas");
const calcularMedia = require("./funcoes/calcularMedia");
const cadastrarEContarFaltas = require("./funcoes/cadastrarEContarFaltas");
const exibeResultado = require("./funcoes/exibeResultado");

console.log("=============== Bem vindo ao controle de notas! ===============\n");

const aluno = prompt("Informe o nome do aluno: ");

cadastrarMaterias();
const notas = cadastrarNotas(materias);
const medias = calcularMedia(notas);
const { faltas, reprovadoPorFaltas } = cadastrarEContarFaltas(materias);

exibeResultado(medias, faltas);


