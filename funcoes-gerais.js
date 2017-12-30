module.exports = {
	
	coletarDataCompleta: () => {

		var presente = new Date();

		var todosDiasSemana = [
		'Domingo',
		'Segunda-feira', 
		'Terça-feira', 
		'Quarta-feira', 
		'Quinta-feira',
		'Sexta-feira',
		'Sábado'
		];

		var diaSemana = todosDiasSemana[presente.getDay()];

		var dia = ('0' + presente.getDate()).slice(-2);
		var mes = ('0' + (presente.getMonth() + 1)).slice(-2);
		var ano = presente.getFullYear();

		var hora = ('0' + presente.getHours()).slice(-2);
		var minuto = ('0' + presente.getMinutes()).slice(-2);

		return `${diaSemana}, ${dia}/${mes}/${ano} às ${hora}:${minuto}`
	}
}




