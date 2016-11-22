//moduloSalvar.js

const fs = require("fs");

const salvarDados = {
	salvar: (vetorNomes, nomeArquivo, readLine) => {

		for(var nomes in vetorNomes)
			fs.appendFile(nomeArquivo, vetorNomes[nomes]+"\n");
			
		readLine.close();
		console.log("Arquivo %s salvo!", nomeArquivo);
		
	}
};

//publicando o conteúdo
module.exports = salvarDados;