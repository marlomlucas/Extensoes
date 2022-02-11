//Insert Descrição Chamado.
$("#containerCollapseInfo").after(
    '<button id="novo" class="INPUT" style="width:80px" type="button">Novo Chamado</button>',
	'<button id="conta_bloqueado" class="INPUT" style="width:80px" type="button">Conta Bloqueada</button>',
	'<button id="muda" class="INPUT" style="width:80px" type="button">Ligação Muda</button>',
	'<button id="inc_vpn" class="INPUT" style="width:80px" type="button">Incidente VPN</button>',
	'<button id="inc_remoto" class="INPUT" style="width:80px" type="button">Acesso Remoto</button>',
	'<button id="conf_impre" class="INPUT" style="width:80px" type="button">Conf Impressora</button>',
	'<button id="acesso" class="INPUT" style="width:80px" type="button">Acesso</button>',
	'<button id="duvida_d" class="INPUT" style="width:80px" type="button">Duvida</button>',
	'<button id="status_cha" class="INPUT" style="width:80px" type="button">Status</button>',
);

//Insert Descrição Encerramento.
$("#dsacompanhamento").before(
    '<button id="gerado_novo" class="INPUT" style="width:80px" type="button">Gerado Novo</button>',
	'<button id="conta_desblo" class="INPUT" style="width:80px" type="button">Conta Desblo</button>',
	'<button id="configurado" class="INPUT" style="width:80px" type="button">Configurado</button>',
	'<button id="instalado" class="INPUT" style="width:80px" type="button">Instalado</button>',
	'<button id="tentativa_contato" class="INPUT" style="width:90px" type="button">Tentativa Contato</button>',
	'<button id="duvida_e" class="INPUT" style="width:80px" type="button">Duvida</button>',
	'<button id="senha_alt" class="INPUT" style="width:80px" type="button">Senha Alt</button>',
	'<button id="limpeza" class="INPUT" style="width:80px" type="button">Limpeza</button>',
	'<button id="demanda" class="INPUT" style="width:80px" type="button">Demanda</button>',
	'<button id="status" class="INPUT" style="width:80px" type="button">Status</button>',
	'<button id="acesso_enc" class="INPUT" style="width:90px" type="button">Acesso</button>',
);

//Insert Horas Trabalhadas.
$("#btnLargeViewdsacompanhamento").after(
	'<button id="1m" class="INPUT" style="width:35px;" type="button">1min</button>',
	'<button id="2m" class="INPUT" style="width:35px;" type="button">2min</button>',
	'<button id="5m" class="INPUT" style="width:35px;" type="button">5min</button>',
	'<button id="10m" class="INPUT" style="width:35px;" type="button">10min</button>',
	'<button id="15m" class="INPUT" style="width:35px;" type="button">15min</button>',
	'<button id="20m" class="INPUT" style="width:35px;" type="button">20min</button>',
	'<button id="30m" class="INPUT" style="width:35px;" type="button">30min</button>',
	'<button id="59m" class="INPUT" style="width:35px;" type="button">59min</button>',
);

//Editar.
$("#label_dschamado").before(
	'<button id="edit" class="INPUT" style="width:80px" type="button">Editar</button>'
);

//Campos adicionais Auto
$("#divInformacaoAdicional").before(
	'<button id="autopree" class="INPUT" style="width:80px" type="button">Auto preencher</button>'
);