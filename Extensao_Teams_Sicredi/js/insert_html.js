async function insert_html(){
	while(document.getElementById('controlbox-input-group') == null){
		await new Promise(r => setTimeout(r, 600));
	};
//$("#ts-bottom-compose-identifier").after(

	
	$("#controlbox-input-group").before(
		`
		<button id="botao01" style="background-color:#A9A9A9; font-size: 8px; padding: 0.5px 15px; margin-left:10%; border-radius: 8px; color:#ADD8E6; cursor: pointer;">Teste1</button>
		<button id="botao02" style="background-color:#A9A9A9; font-size: 8px; padding: 0.5px 15px; border-radius: 8px; color:#ADD8E6; cursor: pointer;">Teste2</button>
		<button id="botao03" style="background-color:#A9A9A9; font-size: 8px; padding: 0.5px 15px; border-radius: 8px; color:#ADD8E6; cursor: pointer;">Teste3</button>
		<button id="botao04" style="background-color:#A9A9A9; font-size: 8px; padding: 0.5px 15px; border-radius: 8px; color:#ADD8E6; cursor: pointer;">Teste4</button>
		
		<script>
			$('#botao01').click(function(){
				document.getElementsByClassName("cke_contents cke_reset")[0].getElementsByTagName('div')[1].innerText = "Teste1";
				document.getElementById("send-message-button").click();
			});
		</script>
		
		<script>
			$('#botao02').click(function(){
				document.getElementsByClassName("cke_contents cke_reset")[0].getElementsByTagName('div')[1].innerText = "Teste2";
				document.getElementById("send-message-button").click();
			});
		</script>
		
		<script>
			$('#botao03').click(function(){
				document.getElementsByClassName("cke_contents cke_reset")[0].getElementsByTagName('div')[1].innerText = "Teste3";
				document.getElementById("send-message-button").click();
			});
		</script>
		
		<script>
			$('#botao04').click(function(){
				document.getElementsByClassName("cke_contents cke_reset")[0].getElementsByTagName('div')[1].innerText = "Teste4";
				document.getElementById("send-message-button").click();
			});
		</script>
		
		<script>
			$('#searchInputField').click(function(){
				document.getElementById("searchInputField").value = "@teste.com"
			});
		</script>
		`
	);
};
insert_html();


window.getSelection().anchorNode