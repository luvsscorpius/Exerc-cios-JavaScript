// Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).

const btn = document.getElementById('btn')

function converter() {
    const res = document.getElementById('res')
    const numero = document.getElementById('numero')
    const num = numero.value
    const conversao = ((num * 1.8) + 32).toFixed(1)

    if (num == '') {
        res.innerHTML = 'A caixa de temperatura está vazia, por favor insira um número antes de prosseguir.'
    } else {
        res.innerHTML = `${num} graus Celsius equivalem a ${conversao} graus Fahrenheit.`
    }
}

btn.addEventListener('click', converter)


