async function getsetselect(){
	while(document.getElementById('gsft_main').contentWindow.document.getElementById('brow') == null){
		await new Promise(r => setTimeout(r, 600));
	};
	
	document.getElementById('gsft_main').contentWindow.document.getElementById('inputv').addEventListener('click', limpa);
	async function limpa(){
		document.getElementById('gsft_main').contentWindow.document.getElementById('inputv').value = "";
	};
	
	document.getElementById('gsft_main').contentWindow.document.getElementById('inputv').addEventListener('input', updateValue);
	function updateValue(){
		let valuetag = document.getElementById('gsft_main').contentWindow.document.getElementById('inputv').value
		document.getElementById('gsft_main').contentWindow.document.getElementById('new_call.short_description').value = valuetag + ' / Marlom.Camaran'
	};
	
	document.getElementById('gsft_main').contentWindow.document.getElementById('new_call.call_type').value = 'incident';
	document.getElementById('gsft_main').contentWindow.document.getElementById('new_call.description').value =
`Nome: 
Usuário: 
Telefone: ()
IP: 
Incidente/Solicitação: `

document.getElementById('gsft_main').contentWindow.document.getElementById('new_call.description').setAttribute("style", "height: 104px;");
};
getsetselect();