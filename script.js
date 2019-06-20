
var mysterious_number = Math.floor(Math.random() * 10);
var attempts = 4;
var found = false;

// Resposta do valor para testar: document.getElementById("clue").innerHTML = numero;

function playGame(){
	checkAttempts();
}

function getValue(){
	var num = document.getElementById("value").value;
	return num;
}

function setMessage(text){
	document.getElementById("clue").innerHTML = text;
}


function checkItsDone(){
	if(getValue() == mysterious_number){
		setMessage("--> Parabéns você acertou! O Jogo será reiniciado");
		found = true;

		restart();
	}
	else{
		found = false;
		giveTips();
	}
}

function giveTips(){

	if(getValue() < mysterious_number){
		var msg = "--> Você errou, mas vou te dar uma dica: "+ 
			" O número que pensei é maior do que você digitou!";
		setMessage(msg);
	}

	else if(getValue() > mysterious_number){
		var msg = "---> Você errou, mas vou te dar uma dica: "+
			"O número que estou pensando é menor do que você digitou!";
		setMessage(msg);
	}

	else{
		setMessage("--> Valor inválido, informe novamente um valor!");
		attempts+=1;
	}
}

function checkAttempts(){
	attempts-=1;

	document.getElementById("qtdeTentativas").innerHTML = "Quantidade de Tentativas que ainda possui: " + attempts;

	checkNumberAttempts(attempts);
}

function checkNumberAttempts(cont){
	switch(cont){
		case 0:
			checkItsDone();

			if(!found){
				setMessage("--> Você perdeu!! Tente Novamente");
			}

			restart();
			break;

		default:
			checkItsDone();		
	}
}

function restart(){
	mysterious_number = Math.floor(Math.random() * 10);
	attempts = 4;
	document.getElementById("value").value = "";
}