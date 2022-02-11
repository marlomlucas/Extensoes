//Função para preencher a descrição do encerramento
function encerramento(id, desc, privado, solucao, acompa){
	$(id).click(function(){
    $('#dsacompanhamento').val(desc);
	document.getElementById("idprivado").checked = privado;
	document.getElementById("idsolucao").checked = solucao;
	if(document.getElementById("cdtipoacompanhamento").options.length > 3){
		document.getElementById("cdtipoacompanhamento").value = acompa
	}else{
		document.getElementById("cdtipoacompanhamento").value = 8
	}
});
};
encerramento('#gerado_novo', "Gerado novo chamado nas categorias corretas para fluxo de aprovação e atendimento: ", false, true, 1);
encerramento('#conta_desblo', "Conta Desbloqueada.", false, true, 1);
encerramento('#idm_gerado', "Ligação muda. Tentativa de contato sem sucesso.", false, true, 1);
encerramento('#tentativa_contato', "Tentativa de Contato sem sucesso. Ramal e Teams.", false, false, 4);
encerramento('#configurado', "Configurado conforme solicitado.", false, true, 1);
encerramento('#instalado', "Instalado conforme solicitado.", false, true, 1);
encerramento('#duvida_e', "Usuário instruído sobre.", false, true, 1);
encerramento('#senha_alt', "Senha alterada. Nome completo e CPF confirmados.", false, true, 1);
encerramento('#limpeza', "Efetuada limpeza dos temporários. Sistemas revisados e atualizados", false, true, 1);
encerramento('#demanda', "Demanda atendida em: ", false, true, 1);
encerramento('#status', "Usuário informado sobre o status do chamado e seu fluxo de atendimento.", false, true, 1);
encerramento('#acesso_enc', "Acesso liberado. Dúvidas entrar em contato com a TI no 555-0000", false, true, 1);

// Função Horas Trabalhadas
function registrahoras(id, min){
	$(id).click(function(){
	$('#nrduracao').val(min);
	$('#dsacompanhamento').val("Registro Horas Trabalhadas.");
	document.getElementById("cdtipoacompanhamento").value = 8;
	document.getElementById("idprivado").checked = true;
});
};
registrahoras('#1m', "000:01");
registrahoras('#2m', "000:02");
registrahoras('#5m', "000:05");
registrahoras('#10m', "000:10");
registrahoras('#15m', "000:15");
registrahoras('#20m', "000:20");
registrahoras('#30m', "000:30");
registrahoras('#59m', "000:59");