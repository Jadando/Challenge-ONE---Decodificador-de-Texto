let CopyGlobal

function criptografar(texto) {
    // Substituir cada letra conforme as "chaves" de criptografia
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto;
}
function descriptografar(textoCriptografado) {
    // Substituir cada "chave" pela letra correspondente
    textoCriptografado = textoCriptografado.replace(/enter/g, "e");
    textoCriptografado = textoCriptografado.replace(/imes/g, "i");
    textoCriptografado = textoCriptografado.replace(/ai/g, "a");
    textoCriptografado = textoCriptografado.replace(/ober/g, "o");
    textoCriptografado = textoCriptografado.replace(/ufat/g, "u");

    return textoCriptografado;
}

function enviartexto(parametro) {
    if (parametro == 'criptografar') {
        var mensagem = document.getElementById("texto").value;
        var textoCriptografado = criptografar(mensagem);
        exibirMensagem(textoCriptografado);
    } else {
        var mensagem = document.getElementById("texto").value;
        var textoDesriptografado = descriptografar(mensagem);
        exibirMensagem(textoDesriptografado);
    }
}

function exibirMensagem(mensagem) {
    var texto = document.querySelector('h2')
    texto.style.color = '#495057'
    var subtexto = document.querySelector('p')
    subtexto.style.display = 'none'
    var ilustracao = document.getElementById('ilustracao')
    ilustracao.style.display = 'none'
    var copy = document.getElementById('copy')
    copy.style.display = 'flex'
    var exibirResultado = document.querySelector('h2')
    exibirResultado.innerText = `${mensagem}`
    CopyGlobal = mensagem
}

function copiar() {
    navigator.clipboard.writeText(CopyGlobal)
    var subtexto = document.querySelector('p')
    subtexto.style.display = 'flex'
    subtexto.innerText = "Copiado com Sucesso"
}

