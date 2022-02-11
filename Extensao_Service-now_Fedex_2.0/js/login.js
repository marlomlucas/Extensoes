async function login(){
	document.getElementById('okta-signin-username').setAttribute("value", "teste");
	await new Promise(r => setTimeout(r, 200));
	document.getElementById('okta-signin-username').value = "teste";
	await new Promise(r => setTimeout(r, 200));
	document.getElementById('okta-signin-password').setAttribute("value", "teste");
	await new Promise(r => setTimeout(r, 200));
	document.getElementById('okta-signin-password').value = "teste";
	await new Promise(r => setTimeout(r, 200));	
};

window.onload = function(){
	login()
};