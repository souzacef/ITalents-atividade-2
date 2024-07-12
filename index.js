const prompt = require("prompt-sync")();

console.log("==========Bem vindo ao controle de notas!==========\n");

const aluno = prompt("informe o nome do aluno. ");

const materias = [];
function cadastrarMaterias() {
    let cont = 0;
    let continuarExecutando = true;
    let quantidadeMaterias = materias.length;
    for (let i = 0; i <3; i++){
        materias.push(+prompt("Qual matéria deseja adicionar? "));
    }

    while (continuarExecutando) {
        quantidadeMaterias = materias.length;
        console.log(`${quantidadeMaterias} matérias adicionadas `);
        console.log("Deseja continuar adicionando matérias? ");
        let resposta = prompt("Digite 1 para sim, 2 para não. ")

        if (resposta == 1) {
            materias.push(+prompt("Qual matéria deseja adicionar? "));
        }else {
            console.log("Cadastro encerrado");
            console.log("Próxima etapa");
            continuarExecutando = false;
        }
    }

}

cadastrarMaterias();