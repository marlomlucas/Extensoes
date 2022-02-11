async function insertselect(){
	while(document.getElementById('gsft_main').contentWindow.document.getElementById('element.new_call.call_type') == null){
		await new Promise(r => setTimeout(r, 600));
	}
	let select = document.createElement('input');
	select.setAttribute("list", "brow");
	select.setAttribute("id", "inputv");
	select.setAttribute("class", "form-control");
	select.setAttribute("style", "width:230px; margin-left:550px;");
	select.innerHTML = `
	<datalist id="brow">
	<option value="">Tags</option>
	<option value="[N1] - Alteração de acesso">[N1] - Alteração de acesso</option>
	<option value="[N1] - Ativação Usuário">[N1] - Ativação Usuário</option>
	<option value="[N1] - Ativação office">[N1] - Ativação office</option>
	<option value="[N1] - Criação de Acesso">[N1] - Criação de Acesso</option>
	<option value="[N1] - Colocar maquina no domínio">[N1] - Colocar maquina no domínio</option>
	<option value="[N1] - Configuração de Email">[N1] - Configuração de Email</option>
	<option value="[N1] - Consulta ao chamado">[N1] - Consulta ao chamado</option>
	<option value="[N1] - Configuração de maquina nova">[N1] - Configuração de maquina nova</option>
	<option value="[N1] - Email com caixa cheia">[N1] - Email com caixa cheia</option>
	<option value="[N1] - Email\ capacidade de anexo">[N1] - Email\ capacidade de anexo</option>
	<option value="[N1] - Email\Outlook não abre">[N1] - Email\Outlook não abre</option>
	<option value="[N1] - Email\Outlook pedindo senha">[N1] - Email\Outlook pedindo senha</option>
	<option value="[N1] - Email\Outlook transferencia de maquina">[N1] - Email\Outlook transferencia de maquina</option>
	<option value="[N1] - Email com caixa de saida desculfigurada">[N1] - Email com caixa de saida desculfigurada</option>
	<option value="[N1] - Erro JDE na verificação de documento">[N1] - Erro JDE na verificação de documento</option>
	<option value="[N1] - Erro de anexo do LMS">[N1] - Erro de anexo do LMS</option>
	<option value="[N1] - Erro de LMS ">[N1] - Erro de LMS </option>
	<option value="[N1] - Erro dao subir arquivos C">[N1] - Erro dao subir arquivos C</option>
	<option value="[N1] - Erro de JDE">[N1] - Erro de JDE</option>
	<option value="[N1] - Erro de rede">[N1] - Erro de rede</option>
	<option value="[N1] - Erro de TS\ usuário">[N1] - Erro de TS\ usuário</option>
	<option value="[N1] - Erro MCcaffe">[N1] - Erro MCcaffe</option>
	<option value="[N1] - Erro para navegar na internet">[N1] - Erro para navegar na internet</option>
	<option value="[N1] - Falha de relação de confiança">[N1] - Falha de relação de confiança</option>
	<option value="[N1] - Instalação do LMS">[N1] - Instalação do LMS</option>
	<option value="[N1] - LMS SWT não abre">[N1] - LMS SWT não abre</option>
	<option value="[N1] - Instalação de aplicativos">[N1] - Instalação de aplicativos</option>
	<option value="[N1] - Instalação de Impressora/balança">[N1] - Instalação de Impressora/balança</option>
	<option value="[N1] - Impressora/balança offilne">[N1] - Impressora/balança offilne</option>
	<option value="[N1] - Impressão não sai">[N1] - Impressão não sai</option>
	<option value="[N1] - Instalação da extensão do Fsist">[N1] - Instalação da extensão do Fsist</option>
	<option value="[N1] - Ligação transferida">[N1] - Ligação transferida</option>
	<option value="[N1] - Ligação Muda">[N1] - Ligação Muda</option>
	<option value="[N1] - Orientação ao usuário">[N1] - Orientação ao usuário</option>
	<option value="[N1] - Perfil de usuário corrompido">[N1] - Perfil de usuário corrompido</option>
	<option value="[N1] - Reset de senha AD">[N1] - Reset de senha AD</option>
	<option value="[N1] - Reset de senha RM">[N1] - Reset de senha RM</option>
	<option value="[N1] - Reset de senha SGA">[N1] - Reset de senha SGA</option>
	<option value="[N1] - Reset senha Lotus Notes ">[N1] - Reset senha Lotus Notes </option>
	<option value="[N1] - Reset de senha Rede">[N1] - Reset de senha Rede</option>
	<option value="[N1] - Reset de senha JDE	">[N1] - Reset de senha JDE	</option>
	<option value="[N1] - Filial sem internet">[N1] - Filial sem internet</option>
	<option value="[N1] - Cancelamento RTS	">[N1] - Cancelamento RTS	</option>
	<option value="[N1] - Usuário desabilitado JDE">[N1] - Usuário desabilitado JDE</option>
	<option value="[SUST] - LMS - Alterar localização">[SUST] - LMS - Alterar localização</option>
	<option value="[SUST] - LMS - alterar status pré manifesto">[SUST] - LMS - alterar status pré manifesto</option>
	<option value="[SUST] - LMS - Alterar para digitação de NF finalizada">[SUST] - LMS - Alterar para digitação de NF finalizada</option>
	<option value="[SUST] - LMS - Alterar para descarga finalizada">[SUST] - LMS - Alterar para descarga finalizada</option>
	<option value="[SUST] - LMS - Ajuste Controle de Carga">[SUST] - LMS - Ajuste Controle de Carga</option>
	<option value="[SUST] - LMS - Atualizar arquivos MWW servidor">[SUST] - LMS - Atualizar arquivos MWW servidor</option>
	<option value="[SUST] - LMS - Cancelar CTE">[SUST] - LMS - Cancelar CTE</option>
	<option value="[SUST] - LMS - Cancelar Manifesto">[SUST] - LMS - Cancelar Manifesto</option>
	<option value="[SUST] - LMS - CTE/MDFe Rejeitado">[SUST] - LMS - CTE/MDFe Rejeitado</option>
	<option value="[SUST] - LMS - CTE não emitido">[SUST] - LMS - CTE não emitido</option>
	<option value="[SUST] - LMS - CTE bloqueado">[SUST] - LMS - CTE bloqueado</option>
	<option value="[SUST] - LMS - Erro ao cancelar CTE">[SUST] - LMS - Erro ao cancelar CTE</option>
	<option value="[SUST] - LMS - Erro ao mandar imprimir CTE">[SUST] - LMS - Erro ao mandar imprimir CTE</option>
	<option value="[SUST] - LMS - Erro ao reemitir CTE">[SUST] - LMS - Erro ao reemitir CTE</option>
	<option value="[SUST] - LMS - Erro ao reemitir controle de carga">[SUST] - LMS - Erro ao reemitir controle de carga</option>
	<option value="[SUST] - LMS - Erro ao da saida de veiculo na portaria">[SUST] - LMS - Erro ao da saida de veiculo na portaria</option>
	<option value="[SUST] - LMS - Erro iniciar descarga">[SUST] - LMS - Erro iniciar descarga</option>
	<option value="[SUST] - LMS - Erro iniciar Coleta">[SUST] - LMS - Erro iniciar Coleta</option>
	<option value="[SUST] - LMS - Erro não tratado">[SUST] - LMS - Erro não tratado</option>
	<option value="[SUST] - LMS - Erro CIOT">[SUST] - LMS - Erro CIOT</option>
	<option value="[SUST] - LMS - Erro ao incluir pré manifesto">[SUST] - LMS - Erro ao incluir pré manifesto</option>
	<option value="[SUST] - LMS - Erro ao finalizar controle de carga">[SUST] - LMS - Erro ao finalizar controle de carga</option>
	<option value="[SUST] - LMS - Erro ao manter controle de carga">[SUST] - LMS - Erro ao manter controle de carga</option>
	<option value="[SUST] - LMS - Erro ao dar baixa">[SUST] - LMS - Erro ao dar baixa</option>
	<option value="[SUST] - LMS - Erro ao reimprimir o CTI">[SUST] - LMS - Erro ao reimprimir o CTI</option>
	<option value="[SUST] - LMS - Erro de processamento EDI">[SUST] - LMS - Erro de processamento EDI</option>
	<option value="[SUST] - LMS - Erro não tratado">[SUST] - LMS - Erro não tratado</option>
	<option value="[SUST] - LMS - Executar coleta">[SUST] - LMS - Executar coleta</option>
	<option value="[SUST] - LMS - Excluir Frota">[SUST] - LMS - Excluir Frota</option>
	<option value="[SUST] - LMS - Excluir nota">[SUST] - LMS - Excluir nota</option>
	<option value="[SUST] - LMS - Erro ao cancelar manifesto com reaproveitamento">[SUST] - LMS - Erro ao cancelar manifesto com reaproveitamento</option>
	<option value="[SUST] - LMS - Habilitar reenvio de CTE">[SUST] - LMS - Habilitar reenvio de CTE</option>
	<option value="[SUST] - LMS - Intervalo de etiquetas">[SUST] - LMS - Intervalo de etiquetas</option>
	<option value="[SUST] - LMS - Liberar emissão">[SUST] - LMS - Liberar emissão</option>
	<option value="[SUST] - LMS - Limpeza de tela monitor/emissao">[SUST] - LMS - Limpeza de tela monitor/emissao</option>
	<option value="[SUST] - LMS - Lentidão LMS">[SUST] - LMS - Lentidão LMS</option>
	<option value="[SUST] - LMS - Lentidão JDE">[SUST] - LMS - Lentidão JDE</option>
	<option value="[SUST] - LMS - Peso incorreto">[SUST] - LMS - Peso incorreto</option>
	<option value="[SUST] - LMS - Processamento EDI/XML">[SUST] - LMS - Processamento EDI/XML</option>
	<option value="[SUST] - LMS - Problema de importação de arquivo TMS/LMS">[SUST] - LMS - Problema de importação de arquivo TMS/LMS</option>
	<option value="[SUST] - LMS - Situação em branco">[SUST] - LMS - Situação em branco</option>
	<option value="[Auto] - Concerto MWW">[Auto] - Concerto MWW</option>
	<option value="[Auto] - Concerto balança">[Auto] - Concerto balança</option>
	<option value="[Auto] - Concerto impressora etiqueta">[Auto] - Concerto impressora etiqueta</option>
	<option value="[Auto] - Calibragem balança">[Auto] - Calibragem balança</option>
	<option value="[Infra] - Codastrar MWW rede filial">[Infra] - Codastrar MWW rede filial</option>
	<option value="[Infra] - Concerto aparelhos telefonicos">[Infra] - Concerto aparelhos telefonicos</option>
	<option value="[Infra] - Filial sem Internet">[Infra] - Filial sem Internet</option>
	<option value="[Infra] - Liberação de link site externo">[Infra] - Liberação de link site externo</option>
	<option value="[Infra] - Lentidão PROXY">[Infra] - Lentidão PROXY</option>
	<option value="[Infra] - REDE E LINK Lentidão">[Infra] - REDE E LINK Lentidão</option>
	</datalist>`;
	document.getElementById('gsft_main').contentWindow.document.getElementById('element.new_call.call_type').appendChild(select);
};

document.getElementById('gsft_main').onload = function(){
	insertselect();
	getsetselect();
};
