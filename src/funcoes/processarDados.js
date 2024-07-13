const cadastrarNotas = require("./cadastrarNotas");
const calcularMedia = require("./calcularMedia");
const cadastrarEContarFaltas = require("./cadastrarEContarFaltas");
const exibeResultado = require("./exibeResultado");

// Função principal para processar os dados
function processarDados(materias) {
    const notas = cadastrarNotas(materias); // Cadastra as notas
    const medias = calcularMedia(notas); // Calcula a média das notas
    const { faltas, reprovadoPorFaltas } = cadastrarEContarFaltas(materias); // Cadastra e conta as faltas
    
    exibeResultado(medias, faltas); // Exibe o resultado final
}

module.exports = processarDados;
