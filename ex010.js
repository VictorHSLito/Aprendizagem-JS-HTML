var hora = new Date()
var atual = hora.getHours()
console.log(`São exatamente agora ${atual} horas`)

if (atual < 12) {
    console.log('Bom dia!')
}
else if (atual <= 18) {
    console.log('Boa tarde!')
}
else if (atual > 18 && atual <= 24) {
    console.log('Boa noite!')
}
else{
    console.log('Boa Madrugada')
}

var dia = new Date()
var diaSem = dia.getDay()

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break        
    case 1:
        console.log('Segunda-Feira')
         break                
    case 2:
        console.log('Terça-Feira')
        break    
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}