var num = document.getElementById('txtnum')
var a = num.value
var lista = document.getElementById('numlista')
var result = document.getElementById('resultado')
var valores = []


function isNumero() {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista() {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adiciona () {
    if(isNumero(num.value) && !inLista(num.value)) {
        alert("Tudo funcionando")
    }
    else {
        alert("Valor inválido ou já na está incluso na lista!")
    }
    }
