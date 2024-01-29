var num = document.getElementById('txtnum')
var a = num.value
var lista = document.getElementById('numlista')
var result = document.getElementById('resultado')
var valores = []


function adiciona () {
        for (var c = 0; c < lista.length + 1; c++) {
        lista[c] = Number(a)
    }
    }
    if (Number(a) in lista) {
        alert("Número já na lista")
    }
    else {
        console.log(lista)
    }

    if (Number(a) == 0 || Number(a) < 0) {
        alert("Número inválido!")
    }               
        
    else {
        console.log("Tudo okay")
    }
