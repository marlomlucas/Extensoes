//Auto click cronometro
jQuery(function(){
    let timer = setInterval(function() { jQuery('[title="Reiniciar cronômetro"]').click();},1000); // <- milissegundos
});