function atendimento(){document.body.innerHTML =
`<div class='bg' id='container_at'>
	<a href='options.html'><div id='abertura'></div></a>
</div>`
};

function info(s){
const titulo = dadot => document.getElementById('titulo').innerText = dadot
const conteudo = dadoc => document.getElementById('conteudo').innerText = dadoc
switch(s){
case 's1':
	titulo
	`Adicionar Extensão`
	conteudo
	`Extensão foi desenvolvida para o navegador Google Chrome.
	Pode ser baixada diretamente na Chrome Web Store -> https://chrome.google.com/webstore/category/extensions
	Caso voçe possua o prjeto, descompactado, pode seguir os passos...
1.	Acesse o menu do Chrome, no canto superior direito, siga até “Mais Ferramentas” e após clique em “Extensões”.
2.	Após habilite o “Modo do desenvolvedor” no canto superior direito.
3.	Clique em “Carregar sem compactação”, selecione a pasta da extensão e clique em “Selecionar pasta”.
4.	Clique no ícone de “Quebra cabeça” para gerenciar suas extensões, para fixar o ícone da extensão no Chrome, clique no ícone de “Alfinete” do lado do nome da extensão.
OBS: Manter os arquivos da extensão, localmente, preferencialmente em “C:\extensão” caso ela esteja em algum local de rede, pode não ser carregada automaticamente após reiniciar a máquina.`
	break;
case 's2':
	titulo`Menu`
	conteudo`Ao clicar no ícone da extensão é exibido o menu que pode ser personalizado com links de acesso a paginas e sistemas mais utilizados.
	Ex: Qualitor; ITs e documentação; Quarentena O365 e Sistemas de monitoramento.
	Ao apontar o mouse sobre a ultima imagem são exibidas mais opções`
	break;
case 's3':
	titulo`Cronômetro`
	conteudo`Extensão possui uma função que faz o cronômetro do Qualitor “Parar”, para que em casos de esquecimento de reinicia-lo manualmente, a sessão não seja finalizada, atrapalhando as demandas.
Essa função é opcional.`
	break;
case 's4':
	titulo`Categorização automática de Chamados`
	conteudo`A Extensão adiciona botões com funções que preenchem automaticamente as categorias do chamado e adicionar o modelo de Descrição padronizada.
A extensão só seta os valores das categorias no Qualitor. O processo de busca de cada categoria no sistema, ainda é por conta das funções do Qualitor que leva alguns segundos.
Por conta disso foi adicionado ao final da função a alteração da cor do botão “Processar” para verde. Para assim sinalizar que a função foi comcluida.
Chamado Novo
•	Categoriza conforme o botão clicado e adiciona a descrição padronizada.
•	Botão “Acesso” Seta a descrição padronizada o Tipo como “Requisição” e categoria 1 como “Acesso”
•	Botão “Novo Chamado” Apenas seta a descrição padronizada.

Chamados URA
•	Para chamados da URA a extensão os categoriza conforme o botão clicado, remove o título de URA e adiciona a descrição padronizada, já preenchida com o ramal e o login de rede do contato.
•	O campo localidade tem seu valor setado conforme o centro de custos do contato.
•	Botão “Novo Chamado” limpa as categorias já setadas, limpa o título e adiciona a descrição padronizada com o login de rede e ramal.`
	break;
case 's5':
	titulo`Função Auto Preencher`
	conteudo`O Botão Auto preencher, possui uma função para preencher os campos adicionais, conforme a necessidade do chamado.
	Ex: Ramal, Login de rede, Maquina, Ação.
•	Chamados de Conta bloqueada, são setados os campos Ramal, Ação e Login de rede.
•	No caso do campo ação, é setado o valor “Desbloqueio” como padrão.
Porem o campo é destacado com a cor verde para lembrar de alterá-lo caso necessário.

OBS: A função pega os valores a serem inseridos, da descrição do chamado por palavras chave, é selecionada tada a linha apos a palavra chave.
Ex: "Contato:", "Ramal:"`
	break;
case 's6':
	titulo`Botão "Editar"`
	conteudo`Botão “Editar” abre a tela de edição do chamado, aumenta o campo “Descrição” e seta o motivo da alteração. Definido default como “Alteração da Descrição do Chamado”.
	A ampliação do campo da descrição foi definida para todos os chamados em qualquer situação, isso proporciona uma melhor visualização e leitura do mesmo.`
	break;
case 's7':
	titulo`Captura automática de Chamados`
	conteudo`Extensão possui uma função para captura automática de chamados.
Função faz a leitura de três parâmetros do chamado: Título, Data/Hora da abertura e se possui “Responsável”.
•	Chamado com título de URA e Data/Hora de abertura igual a atual, chamado é capturado.
•	Chamado com título de URA e sem responsável, será exibida mensagem solicitando a confirmação para captura.`
	break;
case 's8':
	titulo`Encerramento e status de chamados`
	conteudo`Extensão possui uma lista de botões com textos pré-definidos. Cada botão possui um texto a ser inserido e ajusta os campos “Acompanhamento”, “Privado” e “Solução” Conforme a descrição inserida.`
	break;
case 's9':
	titulo`Registro de Horas trabalhadas`
	conteudo`Assim como o Encerramento e Status, os botões de registro de horas trabalhadas inserem a descrição, setam o tempo trabalhado e ajustam os campos “Acompanhamento”, “Privado” e “Solução” para registro.`
	break;
}};