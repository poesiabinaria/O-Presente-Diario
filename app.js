function mostrarRelogio() {
	
	var presente = new Date;
	
	var horaMinuto = presente.toString().substr(16, 5);
	var segundos = presente.toString().substr(22, 2);

	document.getElementById('hora-minuto').innerHTML = horaMinuto + ':';
	document.getElementById('segundos').innerHTML = segundos;
}


function mostrarData(){
	
	var presente = new Date;

	var mes = presente.getMonth();
	var mesPresente = (mes + 1);

	var dia = presente.toString().substr(8, 2);
	var ano = presente.toString().substr(13, 2);
	
	document.getElementById('dia-mes').innerHTML = dia + '/' + mesPresente;
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






