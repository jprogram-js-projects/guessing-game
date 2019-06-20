
var numero = Math.floor(Math.random() * 10);
var tentativas = 4;
var acertou = false;

// Resposta do valor para testar
document.getElementById("dica").innerHTML = numero;

function jogar(){
	verificaQtdeTentativas();
}

function getValor(){
	var num = document.getElementById("num1").value;
	return num;
}

function setText(txt){
	document.getElementById("dica").innerHTML = txt;
}

function verificaSeAcertou(){
	if(getValor() == numero){
		setText("--> Parabéns você acertou! O Jogo será reiniciado");
		acertou = true;

		reiniciar();
	}
	else{
		darDicas();
	}
}

function darDicas(){

	if(getValor() < numero){
		var msg = "--> Você errou, mas vou te dar uma dica: "+ 
			" O número que pensei é maior do que você digitou!";
		setText(msg);
	}

	else if(getValor() > numero){
		var msg = "---> Você errou, mas vou te dar uma dica: "+
			"O número que estou pensando é menor do que você digitou!";
		setText(msg);
	}

	else{
		setText("--> Valor inválido, informe novamente um valor!");
	}
}


function verificaQtdeTentativas(){
	tentativas-=1;

	switch(tentativas){
		case 0:
			verificaSeAcertou();
			if(!acertou){
				document.getElementById("dica").innerHTML = "--> Você perdeu!! Tente Novamente";
				document.getElementById("num1").value = "";
			}

			reiniciar();

			break;

		default:
			verificaSeAcertou();		
	}
	document.getElementById("qtdeTentativas").innerHTML = "Quantidade de Tentativas que ainda possui: " + tentativas;
}

function reiniciar(){
	numero = Math.floor(Math.random() * 10);
	tentativas = 4;
}