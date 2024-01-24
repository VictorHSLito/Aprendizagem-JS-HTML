function contar(){
    var n1 = window.document.getElementById('inicio')
    var n2 = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    
    if (n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0) {
        window.alert("ERRO! Estão faltando valores")
    }
    else {
        res.innerHTML = 'Contando: '
        let ini = Number(n1.value)
        let f = Number(n2.value)
        let cont = Number(passo.value)
        
        if (ini < f) {
            for (let c = ini; c <= f; c += cont) {
                res.innerHTML += `${c} 👉`  // Pode ser usada também a formatação unicode, ex: \u{1F449}
            }   
            res.innerHTML += `🏁`
        }
        else {
            for (let c = ini; c >= f; c-= cont) {
                res.innerHTML += `${c} 👉`
            }
        }
            res.innerHTML += `🏁`
    }

}