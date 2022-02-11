$('#autopree').click(function(){
	descri = document.getElementById("dschamado").value;
	descri = descri.toLowerCase().replace('á','a')
	descri = descri.split('\n')
	//Contato
	try{document.getElementById('vlinformacaoadicional18').value = descri.find(descri => descri.startsWith("contato:")).substring(descri.indexOf("contato:")+9).trim()}catch{};
	//Ramal
	try{document.getElementById('vlinformacaoadicional1').value = descri.find(descri => descri.startsWith("ramal:")).substring(descri.indexOf("ramal:")+7).trim()}catch{};
	//Maquina
	try{document.getElementById('vlinformacaoadicional24').value = descri.find(descri => descri.startsWith("maquina:")).substring(descri.indexOf("maquina:")+9).trim()}catch{};
	//Ação
	try{document.getElementById('vlinformacaoadicional17').value = "Desbloqueio";}catch{};
	try{document.getElementById('vlinformacaoadicional17').setAttribute("style", "background-color:green; color:white");}catch{};
});