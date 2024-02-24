console.log('tá pegando o js!');

function codificarTexto(){
    let textNoCodi = document.querySelector('.pagina__conteudo__decodificador__input').value;

    //logica pra decodificar
    var texto = textNoCodi;

        if(texto.indexOf("a") != -1){
            console.log("entrei")
            texto = texto.replace(/a/g,"ai");
            console.log(texto);
        }
        if(texto.indexOf("e") != -1){
            texto = texto.replace(/e/g,"enter");
        }
        if(texto.indexOf("i") != -1){
            texto = texto.replace(/(?<!a)i/g,"imes");
        }
        if(texto.indexOf("o") != -1){
            texto = texto.replace(/o/g,"ober");
        }
        if(texto.indexOf("u") != -1){
            texto = texto.replace(/u/g,"ufat");
        }
    
    exibirResultado(texto);
}

function decodificarTexto() {

    let textNoCodi = document.querySelector('.pagina__conteudo__decodificador__input').value;

    //logica pra decodificar
    var texto = textNoCodi;

        if(texto.indexOf("ai") != -1){
            console.log("entrei")
            texto = texto.replace(/ai/g,"a");
            console.log(texto);
        }
        if(texto.indexOf("enter") != -1){
            texto = texto.replace(/enter/g,"e");
        }
        if(texto.indexOf("imes") != -1){
            texto = texto.replace(/imes/g,"i");
        }
        if(texto.indexOf("ober") != -1){
            texto = texto.replace(/ober/g,"o");
        }
        if(texto.indexOf("ufat") != -1){
            texto = texto.replace(/ufat/g,"u");
        }
    
    exibirResultado(texto);
    
}

function exibirResultado(texto){
    // limpar a img e o paragrafo
    limpar('.pagina__conteudo__copiar__resultado');
    //mostrar resultado
    let campo = document.querySelector('.pagina__conteudo__copiar__resultado__texto');
    campo.innerHTML = texto;
    console.log(texto);
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

