// Função para calcular a média das notas
function calcularMedia(notas) {
    const medias = {}; // Objeto para armazenar a média de cada matéria

    for (const materia in notas) {
        const soma = notas[materia].reduce((acumula, nota) => acumula + nota, 0);
        const media = soma / notas[materia].length; // Calcula a média das notas
        medias[materia] = media;
    }
    return medias; // Retorna o objeto medias
}

module.exports = calcularMedia;
