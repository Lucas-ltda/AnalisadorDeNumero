let num = document.querySelector('input#numero')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')

let valores = []

function Numero(n) {
    if ((Number(n)) >= 1 && Number(n) <= 100)  {
     return true
    }else{
        return false
    }
}


function inList(n , l) {
    if (l.indexOf(Number(n))!= -1) {
        return true
    }else{
        return false
    }
}


function adicionar() {
   

    if (Numero(num.value) && !inList(num.value,valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML =''

    }else{
        alert('[ERRO] Valor já adicionado ou inválido')
    }
    num.value = ''
    num.focus()
}


function analisar() {
    if (valores.length == 0) {
        alert('[ERRO] Adicione valores para analise')
    } else {
        let total = valores.length // total de número cadastrados e tamanho do array
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0 
        let media = 0
            for(let index in valores){
                soma += valores[index]// soma dos valores no array
                if (valores[index] > maior) {
                    maior = valores[index]
                }
                if (valores[index] < menor) {
                    menor = valores[index]
                }
            }
            media = soma / total
            res.innerHTML =''
            res.innerHTML += `<p>Total de números cadastrados :${total}</p>`
            res.innerHTML += `<p>Maior número :${maior}</p>`
            res.innerHTML += `<p>Menor número :${menor}</p>`
            res.innerHTML += `<p>Soma :${soma}</p>`
            res.innerHTML += `<p>Média :${media}</p>`
        } 
}
