//Abre pagina
$('#img01').click(function(){
    chrome.tabs.create({'url':'https://www.netflix.com/br/login'});
});
$('#img02').click(function(){
    chrome.tabs.create({'url':'https://www.youtube.com/'});
});