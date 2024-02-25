// Autor: Samuel Nascimento
let objeto = {
    text: ''
}

function textAreaLoc(){
    return document.querySelector('.pagina__conteudo__decodificador__input').value;
}

function translate(text, substituicoes) {
    for(let substituicao of substituicoes){
        const [palavra, chave] = substituicao;
        text = text.replaceAll(palavra, chave);
    }
    return text;
}

function codificarTexto(){
    objeto.text = textAreaLoc();
    const substituicoes = [['e', 'enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    objeto.text = translate(objeto.text, substituicoes);
    exibirResultado();
}

function decodificarTexto() {
    objeto.text = textAreaLoc();
    const substituicoes = [['enter','e'],['imes','i'],['ai','a'],['ober','o'],['ufat','u']];
    objeto.text = translate(objeto.text, substituicoes);
    exibirResultado();
}

function exibirResultado(){
    limpar('.pagina__conteudo__copiar__resultado');
    let campo = document.querySelector('.pagina__conteudo__copiar__resultado__texto');
    campo.innerHTML = objeto.text;
}

function limpar(nomeClass){
    let divResultado = document.querySelector(nomeClass);
    let img = divResultado.querySelector('img');
    let paragrafo = divResultado.querySelector('p');
    // Esconde a imagem e o parágrafo
    img.style.display = 'none';
    paragrafo.style.display = 'none';
}

function copiarTexto() {
    console.log("entrei na funcao copiar")
    const textArea = document.querySelector('.pagina__conteudo__copiar__resultado__texto').innerHTML;
    navigator.clipboard.writeText(textArea).then(() => {
        console.log('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar texto:', err);
    });
}

