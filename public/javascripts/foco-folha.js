var colunaImperativa = document.getElementById('coluna-imperativa');
var colunaPrincipal = document.getElementsByTagName('main')[0];
var cabecalho = document.getElementById('cabecalho');
var footer = document.getElementsByTagName('footer')[0];
var iconeSeta = document.getElementById('icone-seta');




function focarFolha(){
	
	cabecalho.style.height = "100px";
	colunaImperativa.className = "coluna-imperativa-escondida";
	colunaPrincipal.className = 'margem-diminuida';
	footer.className = 'margem-diminuida';
	iconeSeta.src = 'img/seta-direita.png';
}



function retornarPadraoPagina(){
	
	cabecalho.style.height = "140px";
	colunaImperativa.className = '';
	colunaPrincipal.className = '';
	footer.className = '';
	iconeSeta.src = 'img/seta-esquerda.png';
}



function verificarEstadoPagina(){

	if (colunaImperativa.className == ""){ 
		focarFolha(); 
	} 
	else{
		retornarPadraoPagina();
	}
}



iconeSeta.addEventListener("click", verificarEstadoPagina);