let zeroFill = n => {return ('0' + n).slice(-2)} // Função para formatar 1 em 01
let now = new Date(); // Pega Data e Hora atual
// Formata a data conforme dd/mm/aaaa hh:min
let dataHoraAtu = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' - ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes());