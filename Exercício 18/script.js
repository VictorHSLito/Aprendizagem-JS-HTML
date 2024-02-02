var num = document.getElementById('txtnum')
var lista = document.getElementById('numlista')
var result = document.getElementById('resultado')
var valores = []


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if(Array.isArray(l) && l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adiciona () {
    if(isNumero(num.value) && !inLista(num.value)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    }
    else {
        alert("Valor inválido ou já na está incluso na lista!")
    }
    num.value = ''
    num.focus()
        
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    }
    else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }            
        }
        media = soma/tot

        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
        resultado.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
        resultado.innerHTML += `<p> A média de todos os valores é ${media}.</p>`
    }
}