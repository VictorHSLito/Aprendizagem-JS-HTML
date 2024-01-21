function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var a = new Date()
    var hora = a.getHours()

    var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia  
        img.src = "Manhã.png"
        document.body.style.background = '#E7E88E' 
    }
    else if (hora >= 12 && hora < 18){
        // Boa tarde
        img.src = "Tarde.png"
        document.body.style.background = '#F2BF6B' 

    }
    else {
        // Boa Noite
        img.src = "Noite.png"
        document.body.style.background = '#A8A8A8'         
    }
}




window.document.body    (`Agora são ${hora} horas!`)