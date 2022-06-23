let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let descricao = document.querySelector('#descricao')
let nomeOk = false
let emailOk = false
let descricaoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validarNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
        nomeOk = false
    }else{
        txtNome.innerHTML = "nome válido"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if((email.value.indexOf('@') > 0) && (email.value.indexOf('.') > 0)){
        txtEmail.innerHTML = 'email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }else{
        txtEmail.innerHTML = 'email inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    }
}

function validarDescricao(){
    let txtDescricao = document.querySelector('#txtDescricao')

    if (descricao.value.length >= 100){
        txtDescricao.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtDescricao.style.color = 'red'
        txtDescricao.style.display = 'block'
        descricaoOk = false
    }else {
        txtDescricao.style.display = 'none'
        descricaoOk = true
    }

}

function enviar(){
    if(nomeOk == true && emailOk == true && descricaoOk == true){
        alert("preenchido corretamente, enviado com sucesso!!")
    }else{
        alert("preencha o campo corretamente!!")
    }
}


function mapaZoom(){
    mapa.style.width = '700px'
    mapa.style.height = '500px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
