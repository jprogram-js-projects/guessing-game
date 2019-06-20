/*
	Jogo feito rapidamente aqui
	Teoricamente está funcionando mas o código está pessimamente escrito
	Agora que as funcionalidades principais estão funcionando
	Vou melhorar o código retirando esses varios ifs e elses
*/


var numero = Math.floor(Math.random() * 10);
var tentativas = 0;

// Resposta do valor para testar
document.getElementById("dica").innerHTML = numero;

function verificarValor(valor){

	tentativas += 1;

	document.getElementById("qtdeTentativas").innerHTML = "Quantidade de Tentativas: " + tentativas;

	if(valor == numero){
		document.getElementById("dica").innerHTML = "Parabéns você acertou!";
	}
	else{
		verificaMenor(valor);
	}
}

function verificaMenor(valor){
	if(valor < numero){
		document.getElementById("dica").innerHTML = "Você errou, mas vou te dar uma dica: O número que estou pensando é maior do que você digitou!";
	}
	else{
		verificaMaior(valor);
	}
}

function verificaMaior(valor){
	if(valor > numero){
		document.getElementById("dica").innerHTML = "Você errou, mas vou te dar uma dica: O número que estou pensando é menor do que você digitou!";
	}
}

function verificaQtdeTentativas(){
	var num = document.getElementById("num1").value;

	if(tentativas == 4){
		document.getElementById("dica").innerHTML = "Você perdeu!! Tente Novamente";
		document.getElementById("num1").value = "";
		numero = Math.floor(Math.random() * 10);
		tentativas = 0;
	}
	else{
		verificarValor(num);
	}
}