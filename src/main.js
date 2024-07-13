const cadastrarAluno = require("./funcoes/cadastrarAluno");
const { cadastrarMaterias, materias } = require("./funcoes/cadastrarMaterias");
const processarDados = require("./funcoes/processarDados");

const aluno = cadastrarAluno();
cadastrarMaterias();
processarDados(materias);
