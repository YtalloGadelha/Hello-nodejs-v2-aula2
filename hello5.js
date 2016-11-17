//hello5.js
//Arquivo nomeado pelo usuário e composto por nomes de 5 países.

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let fileName;

rl.question("Digite o nome do arquivo:\n", function(name){

	fileName = name;
	//console.log(fileName);
	leiaNome(5);
	//rl.close();
});

var paises = [];

function leiaNome(count){

	if(count--){
		rl.question("Digite o nome de uma país:\n", function(nomePais){

			paises.push(nomePais);
			leiaNome(count);
		});
	}

	else{

		gravaArquivo();
		rl.close();
	}
}

function gravaArquivo(){

	for(var pais in paises){

		fs.appendFile(fileName + ".txt", paises[pais] + "\n");
	}

	console.log("Arquivo %s.txt salvo!", fileName);
}