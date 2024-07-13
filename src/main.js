// Importa os módulos necessários
const cadastrarAluno = require("./funcoes/cadastrarAluno");
const { cadastrarMaterias, materias } = require("./funcoes/cadastrarMaterias");
const processarDados = require("./funcoes/processarDados");

// Executa as funções principais do programa
const aluno = cadastrarAluno(); // Cadastra o aluno
cadastrarMaterias(); // Cadastra as matérias
processarDados(materias); // Processa as notas e faltas
