//Auto Captura
try{var valtitulo = document.getElementById("nmtitulochamado").value} catch{ valtitulo = "null"};
try{var hchamado = document.getElementById("label_dtchamado").innerText} catch{ valtitulo = "null"};
try{var responsavel = document.getElementById("nmresponsavel").value} catch{ responsavel = "null"};

//Condição para captura do Chamado
if (valtitulo == "Chamado criado pela URA" && hchamado == dataHoraAtu){
	document.getElementById('optCapture_caption').click();
} else if (valtitulo == "Chamado criado pela URA" && responsavel == " "){
	let ok = confirm('Deseja Capturar este Chamado ?');
	if(ok){
		document.getElementById('optCapture_caption').click();
	};
};