var senhaUsuario = document.getElementById('senhaUsuario');
var confirmacaoSenhaUsuario = document.getElementById('confirmacaoSenhaUsuario');
var botaoJuntarSe = document.getElementById('botao-juntarse');

function analisarSenha(){
	if (senhaUsuario.value != confirmacaoSenhaUsuario.value) {
		alert("As senhas digitadas não coincidem. Tente novamente.");
		location.reload();
	}
}

botaoJuntarSe.addEventListener("click", analisarSenha);
