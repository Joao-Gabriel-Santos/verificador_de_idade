function clicar() {
    //Variaveis
    var p = window.document.getElementsByTagName('p')[0]
    var img = document.getElementById('img')

    //Ano
    var nastxt = document.getElementById('ano')
    var a = new Date()
    var ano = a.getFullYear()
    var nas = Number(nastxt.value)

    // Calculo
    var res = ano - nas

    //Erros
    if(ano < nas) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }  else if (nas == '') {
        window.alert("[ERRO] É necessario preencher todos os campos")
    } else if (nas < 1907) {
        window.alert ("Então quer dizer que você é a pessoa mais velha do mundo?")
    }
    else {
    //Input:radio
    var sex = window.document.querySelector('input[name="sex"]:checked'). value

    //style 
    img.style.display = 'block'
    p.style.textAlign = 'center'
    var genero = ''
    //Identificador
    if (sex == 'Homem') {
        genero = 'Homem'
        
        if (res <= 12) {
            img.style.backgroundImage = 'url(img/menino-12.jpg)'
        } else if (res > 12 && res <= 29) {
            img.style.backgroundImage = 'url(img/jovem-29.jpg)'
        } else if (res > 29 && res <= 59) {
            img.style.backgroundImage = 'url(img/homem-59.jpg)'
        } else if (res > 59) {
            img.style.backgroundImage = 'url(img/senhor.jpg)'
        }
    } else if (sex=='Mulher'){
        genero = 'Mulher'
        if (res <= 12) {
            img.style.backgroundImage = 'url(img/menina-12.jpg)'
        } else if (res > 12 && res <= 29) {
            img.style.backgroundImage = 'url(img/mulher-29.jpg)'
        } else if (res > 29 && res <= 59) {
            img.style.backgroundImage = 'url(img/mulher-59.jpg)'
        } else if (res > 59) {
            img.style.backgroundImage = 'url(img/senhora.jpg)'
        }
    }  else if (sex != 'Mulher') {
        window.alert('[ERRO] É necessario preencher todos os campos" ')
    }
    p.innerHTML = 'Detectamos ' + genero + ' com ' + res + ' anos'
    
    
            

    }
}