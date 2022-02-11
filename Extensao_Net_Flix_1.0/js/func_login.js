async function login(){
	document.getElementById('id_userLoginId').setAttribute("value", "login_aqui");
	await new Promise(r => setTimeout(r, 200));
	document.getElementById('id_userLoginId').value = "login_aqui";
	await new Promise(r => setTimeout(r, 200));
	document.getElementById('id_password').setAttribute("value", "senha_aqui");
	await new Promise(r => setTimeout(r, 200));
	document.getElementById('id_password').value = "senha_aqui";
	await new Promise(r => setTimeout(r, 200));
	document.getElementsByClassName("login-form")[1].submit();
};

window.onload = function(){
	login()
};