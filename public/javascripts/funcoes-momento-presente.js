function mostrarRelogio() {
	
	var presente = new Date;

	var hora = ('0' + presente.getHours()).slice(-2);
	var minuto = ('0' + presente.getMinutes()).slice(-2);
	var segundo = ('0' + presente.getSeconds()).slice(-2);
	
	document.getElementById('hora-minuto').innerHTML = `${hora}:${minuto}:`;
	document.getElementById('segundos').innerHTML = segundo;
}


function mostrarData(){
	
	var presente = new Date;

	var dia = ('0' + presente.getDate()).slice(-2);
	var mes = ('0' + (presente.getMonth() + 1)).slice(-2);
	var ano = (presente.getFullYear()).toString().slice(-2);
	
	document.getElementById('dia-mes').innerHTML = dia + '/' + mes;
	document.getElementById('ano').innerHTML = ano;
}

function diaOuNoite(){
	
	var presente = new Date;

	var hora = presente.getHours();

	if ((hora >= 6) && (hora < 12)) { 
		document.getElementById('saudacao-msg').innerHTML = 'Bom dia!';
	} else if ((hora >= 12) && (hora < 18)) { 
		document.getElementById('saudacao-msg').innerHTML = 'Boa tarde!';
	} else {
		document.getElementById('saudacao-msg').innerHTML = 'Boa noite!';
		document.getElementById('icone-tempo').src = 'img/lua.png';
	}
}



mostrarRelogio();
setInterval(mostrarRelogio, 1000);
mostrarData();
diaOuNoite();






