function calcularMedia(notas) {
    const medias = {};

    for (const materia in notas) {
        const soma = notas[materia].reduce((acumula, nota) => acumula + nota, 0);
        const media = soma / notas[materia].length;
        medias[materia] = media;
    }
    return medias;
}

module.exports = calcularMedia;
