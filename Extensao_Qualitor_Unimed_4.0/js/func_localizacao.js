function localizacao(){
let localidade = document.getElementById('nmcentrocusto').innerText //Pega Centro de custo
switch(localidade){
	case 'Financeiro':
		document.getElementById('cdlocalidadechange').value = 0
		break;
	case 'Recursos Humanos':
		document.getElementById('cdlocalidadechange').value = 1
		break;
	case 'Administração':
		document.getElementById('cdlocalidadechange').value = 2
	break;
}
};