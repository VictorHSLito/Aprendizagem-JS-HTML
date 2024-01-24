function tabuada() {
    let num = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert("Digite um número maior que zero")
    } 
    else {
        let n = Number(num.value)
        var cont = 1
        tab.innerHTML = ''
        
        while (cont < 11) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            tab.appendChild(item)
            cont++
        }

    }
    
}