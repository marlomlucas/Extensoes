try{document.getElementById("dschamado").rows = 15} catch{};//Aumenta Campo da Descrição
//Botão Editor
$('#edit').click(function(){
	async function edit(){
	document.getElementById('optChangeData_caption').click();//Abre o Editor
	while(document.getElementById('cdtipochamadochange') == null){
		await new Promise(r => setTimeout(r, 600));//Tempo de pausa em Milissegundos
	}
	try{document.getElementById('dschamadochange').rows = 10} catch{};//Aumenta campo da Descrição do Editor
	try{document.getElementById('cdmotivoalteracao').value = 3} catch{};//Seta motivo alteração
	oknook('#btnProcessChange');
};
edit();
});
function oknook(id){
	$(id).click(function(){
		async function clickok(){
			while(document.getElementById('btnOK') == null){
				await new Promise(r => setTimeout(r, 600));
			}
			if(document.getElementsByClassName('WINDOWTITLE')[0].innerText == "Qualitor - Informação"){
				document.getElementById('btnOK').click();
			};
		};
		clickok()
	});
};
oknook('#btnProcessar');
oknook('#btnFollowUp');
oknook('#btnStart');
oknook('#btnanexosChamado');
//Função Descrição e Categorização
function categorizar(id, desc = "", tipo = "", c1 = "", c2 = "", c3 = ""){
$(id).click(function(){
	async function chamado_ura(){
		document.getElementById('optChangeData_caption').click();//Abre o Editor
		while(document.getElementById('cdtipochamadochange') == null){
			await new Promise(r => setTimeout(r, 600));//Tempo de pausa em Milissegundos
		}
		try{document.getElementById('dschamadochange').rows = 10} catch{};//Aumenta campo da Descrição do Editor
		try{document.getElementById('cdmotivoalteracao').value = 3} catch{};//Seta motivo alteração
		let ramal = document.getElementById("dschamado").value.substring(33);//Ramal
		$('#nmtitulochamadochange').val("");//Titulo
		document.getElementById('btnInfoContato').click();
		while(document.getElementById('divAlert') == null){
		await new Promise(r => setTimeout(r, 600));//Tempo de pausa em Milissegundos
		}
		let info = document.getElementById('divAlert').innerText;//Get info todas
		document.getElementById('btnOK').click();
		let login = info.substring(((info.indexOf("Login:")+7)),((info.indexOf("Matrícula:")-1)));//Gambiarra para pegar Login
		$("#dschamadochange").val("Contato: "+login+"\nRamal: "+ramal+"\n"+desc);//Descrição Chamado URA
		localizacao();
	};
	async function chamado_novo(id_tipocha, id_cat1, id_cat2, id_cat3){
		if(newchamado==true){try{document.getElementById('dschamado').value = ("Contato: \nRamal: \n"+desc)}catch{}}else{};//Descrição Novo Chamado
		$("#dschamado").after("<script>maximumLength();</script>");//Ajuste Atualização Qualitor
		await new Promise(r => setTimeout(r, 1000));
		//Categorizando
		if(id == '#novo' && newchamado == true){/*Faz Nada*/}else{
			function selectcat(n){
				if (newchamado == true){
					$("#cdtipochamado").after("<script>selectCategory("+n+", '200', 'cdtipochamado', 'cdcategoria', 'tdCategoria', 'attribCategoria();getSeveridade()')</script>")
				}else{
					$("#cdtipochamado").after("<script>selectCategory("+n+", '200', 'cdtipochamadochange', 'cdcategoriachange', 'tdCategoriaChange')</script>")
				};
			};
			document.getElementById(id_tipocha).value = tipo;//Tipo Chamado
			selectcat(0);
			while(document.getElementById('divLoading') != null){
				await new Promise(r => setTimeout(r, 600));
			}
			document.getElementById(id_cat1).value = c1;//Categoria1
			selectcat(1);
			while(document.getElementById('divLoading') != null){
				await new Promise(r => setTimeout(r, 600));
			}
			document.getElementById(id_cat2).value = c2;//Categoria2
			selectcat(2);
			while(document.getElementById('divLoading') != null){
				await new Promise(r => setTimeout(r, 600));
			}
			document.getElementById(id_cat3).value = c3;//Categoria3
			selectcat(3);
			while(document.getElementById('divLoading') != null){
				await new Promise(r => setTimeout(r, 600));
			}
			$("#cdtipochamado").after("<script>getTipoChamado();</script>");
			try{document.getElementById("btnProcessChange").setAttribute("style", "background-color:green; color:white")}
			catch{document.getElementById("btnProcessar").setAttribute("style", "background-color:green; color:white")};//Botão Processar verde
			oknook('#btnProcessChange');
		};
	};
	if(document.getElementById('divcdchamado').innerText == ""){
		var newchamado = true;
		chamado_novo('cdtipochamado', 'cdcategoria1', 'cdcategoria2', 'cdcategoria3')
	}
	else{
		chamado_ura();
		chamado_novo('cdtipochamadochange', 'cdcategoriachange1', 'cdcategoriachange2', 'cdcategoriachange3')
	};
});
};
categorizar('#novo', 'Máquina: \nProblema: ');//Novo Chamado
categorizar('#conta_bloqueado', 'Problema: Login de rede Bloqueado', 2, 286, 523, 524);//Login bloqueado
categorizar('#muda', 'Ligação Muda', 1, 10, 74);//Ligação Muda
categorizar('#inc_vpn', 'Máquina: \nProblema: Falha conexão VPN.', 2, 283, 457, 459);//Incidente VPN
categorizar('#inc_remoto', 'Máquina: \nProblema: ', 2, 286, 1485, 1486);//Incidente Acesso Remoto
categorizar('#conf_impre', 'Máquina: \nProblema: ', 2, 288, 560, 561);//Incidente Impressora
categorizar('#acesso', 'Solicitação: ', 3, 756);//Solicitação de Acesso
categorizar('#duvida_d', 'Duvida: Abrir chamados via portal Qualitor.', 1, 12, 231, 232);//Duvida
categorizar('#status_cha', 'Status Chamado: ', 1, 12, 231, 232);//Status Chamado