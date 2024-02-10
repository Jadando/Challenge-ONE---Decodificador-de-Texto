let CopyGlobal

function Criptografar() {
    var mensagem = document.getElementById("texto").value
    var codificador = btoa(mensagem)
    exibirMensagem(codificador)
}

function Descriptografar() {
    var mensagem = document.getElementById("texto").value
    var decodificador = atob(mensagem)
    exibirMensagem(decodificador)
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

