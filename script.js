var mysterious_number = 0;
var attempts = 4;
var found = false;

// Resposta do valor para testar: document.getElementById("clue").innerHTML = mysterious_number;

document.querySelector('body').onload = function(){
	var tex = ".: REGRAS :<br>"+
				"1. O jogo de adivinhação onde o valor será algum valor de 0 a 9. <br/>"+
				"2. Você possui apenas 4 tentativas para descobrir. <br/>"+
				"3. Após acertar o número a ser descorberto, o jogo será reiniciado. <br/>"+
				"4. Após as 4 tentativas e você não conseguir descobrir, o jogo se reinicia.";

	swal({
	  title: 'Seja Bem Vindo!',
	  type: 'info',
	  html: tex
	});
}


document.querySelector('button.btnSubmit').onclick = function(){
	mysterious_number = Math.floor(Math.random() * 10);

	checkAttempts();
} 

function getValue(){
	var num = document.getElementById("value").value;
	return num;
}

function setMessage(text){
	document.getElementById("clue").innerHTML = text;
}

function showSucessMessage(){
	swal({
	  title: 'Você Acertou!',
	  type: 'success',
	  html: "Parabéns você acertou! O Jogo será reiniciado"
	});
}

function checkItsDone(){
	if(getValue() == mysterious_number){
		showSucessMessage();
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
	var mysterious_number = Math.floor(Math.random() * 10);
	var attempts = 4;
	var found = false;
}