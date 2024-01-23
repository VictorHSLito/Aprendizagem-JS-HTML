function contar(){
    var n1 = window.document.getElementById('inicio')
    var n2 = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    
    if (n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0) {
        window.alert("ERRO! Estão faltando valores")
    }

}