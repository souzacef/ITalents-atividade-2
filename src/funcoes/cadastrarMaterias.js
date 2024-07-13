const prompt = require("prompt-sync")();

const materias = []; // Array para armazenar as matérias

// Função para inserir uma nova matéria
function inserirMateria(contador) {
    const materia = prompt(`Insira a ${contador}ª matéria: `); // Solicita o nome da matéria
    if (materia.trim() !== "") {
        materias.push(materia); // Adiciona a matéria ao array se não estiver vazia
    } else {
        console.log("Nome da matéria não pode ser vazio.");
    }
    console.log();
}

// Função para cadastrar todas as matérias
function cadastrarMaterias() {
    console.log("\n======== Cadastro de matérias ========\n");
    let continuarExecutando = true;

    for (let i = 1; i <= 3; i++) {
        inserirMateria(i); // Insere as três primeiras matérias
    }

    while (continuarExecutando) {
        let quantidadeMaterias = materias.length;
        console.log(`\n${quantidadeMaterias} matérias adicionadas.\n`);
        console.log("Deseja continuar adicionando matérias?\n");
        let resposta = prompt("Digite 1 para sim, 2 para não: ");

        if (resposta === '1') {
            inserirMateria(quantidadeMaterias + 1); // Insere uma nova matéria
        } else if (resposta === '2') {
            console.log("\nCadastro de matérias encerrado.");
            console.log("======== Próxima etapa ========\n");
            continuarExecutando = false; // Encerra o cadastro de matérias
        } else {
            console.log("Entrada inválida. Digite 1 para sim, 2 para não.");
        }
    }
}

module.exports = { cadastrarMaterias, materias };
