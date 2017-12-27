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

		var dia = presente.getDate();
		var mes = presente.getMonth();
		var ano = presente.getFullYear();

		var hora = presente.getHours();
		var minuto = presente.getMinutes();

		return `${diaSemana}, ${dia}/${mes}/${ano} às ${hora}:${minuto}`
	}
}




