
var numero = Math.floor(Math.random() * 10);
var tentativas = 4;
var acertou = false;

// Resposta do valor para testar: document.getElementById("dica").innerHTML = numero;

function playGame(){
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
		acertou = false;
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
		tentativas+=1;
	}
}

function verificaQtdeTentativas(){
	tentativas-=1;

	document.getElementById("qtdeTentativas").innerHTML = "Quantidade de Tentativas que ainda possui: " + tentativas;

	validaTentativas(tentativas);
}

function validaTentativas(cont){
	switch(cont){
		case 0:
			verificaSeAcertou();
			if(!acertou){
				setText("--> Você perdeu!! Tente Novamente");
			}

			reiniciar();

			break;

		default:
			verificaSeAcertou();		
	}
}

function reiniciar(){
	numero = Math.floor(Math.random() * 10);
	tentativas = 4;
	document.getElementById("num1").value = "";
}