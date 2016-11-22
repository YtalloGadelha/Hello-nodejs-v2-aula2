//exercicioCasa.js
//script que recebe 3 nomes via linha de comando
//parte de salvamento é feita por meio de um módulo

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var nomes = [];

function leiaNome(count){

	if(count--){

		rl.question("Digite um nome:\n", (entrada) => {
			nomes.push(entrada);
			leiaNome(count);
		});

	}

	else{

		var salvaArquivo = require("./moduloSalvar");
		salvaArquivo.salvar(nomes, "entradasRecebidas.txt", rl);

	}
}

leiaNome(3);