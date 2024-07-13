const cadastrarNotas = require("./cadastrarNotas");
const calcularMedia = require("./calcularMedia");
const cadastrarEContarFaltas = require("./cadastrarEContarFaltas");
const exibeResultado = require("./exibeResultado");

function processarDados(materias) {
    const notas = cadastrarNotas(materias);
    const medias = calcularMedia(notas);
    const { faltas, reprovadoPorFaltas } =
     cadastrarEContarFaltas(materias);

    exibeResultado(medias, faltas,);
}

module.exports = processarDados;