var numero = Math.floor(Math.random() * 10);
document.getElementById("dica").innerHTML = numero;

function verificarValor(){

	var num = document.getElementById("num1").value;

	if(num == numero){
		window.alert("Parabéns você descobriu!");
	}
	else{
		verificaMenor(num);
	}
}

function verificaMenor(valor){
	if(valor < numero){
		window.alert("Você errou, mas vou te dar uma dica: O número que estou pensando é maior do que você digitou!");
	}
	else{
		verificaMaior(valor);
	}
}

function verificaMaior(valor){
	if(valor > numero){
		window.alert("Você errou, mas vou te dar uma dica: O número que estou pensando é menor do que você digitou!");
	}
}