//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro Se vitórias for entre 11 e 20 = Bronze Se vitórias for entre 21 e 50 = Prata Se vitórias for entre 51 e 80 = Ouro Se vitórias for entre 81 e 90 = Diamante Se vitórias for entre 91 e 100= Lendário Se vitórias for maior ou igual a 101 = Imortal



function rank(vitorias, derrotas) {
	let resultado = vitorias - derrotas
	return resultado;


}


let saldo = rank(100, 30);

let nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

if(saldo <= 10){
	console.log("O herói tem saldo de " + saldo + " e está no nível de " + nivelHeroi[0])
    
}else if(saldo >=11 && saldo <=20){
		console.log("O herói tem saldo de " + saldo + " e está no nível de " + nivelHeroi[1])
}else if(saldo >=21 && saldo <=50){
		console.log("O herói tem saldo de " + saldo + " e está no nível de " + nivelHeroi[2])
}else if(saldo >=51 && saldo <=80){
	console.log("O herói tem saldo de " + saldo + " e está no nível de " + nivelHeroi[3])
}else if(saldo >=81 && saldo <=90){	
	console.log("O herói tem saldo de " + saldo + " e está no nível de " + nivelHeroi[4])
}else if (saldo >= 91 && saldo <= 100){
	console.log("O herói tem saldo de " + saldo + " e está no nível de " + nivelHeroi[5])
}else{
	console.log("O herói tem saldo de " + saldo + " e está no nível de " + nivelHeroi[6])
}