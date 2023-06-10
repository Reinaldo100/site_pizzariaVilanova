const form = document.getElementById('form-contato');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    let formEvalido = false;
    e.preventDefault();
})

const nomeInteiro = document.getElementById('nome-Inteiro');
const seuEmail = document.getElementById('seu-Email');
const seuContato = document.getElementById('seu-Contato');
const mensagem = `Seu ${nomeInteiro.value}, seu ${seuEmail.value} e seu ${seuContato} foram cadastrado com sucesso!`;

formEvalido = validaNome(nomeInteiro.value)
if(formEvalido) {
    alert(mensagem)

    nomeInteiro.value = '';
    seuEmail.value = '';
    seuContato.value = '';
}else{
    alert('Nome não esta completo')
}