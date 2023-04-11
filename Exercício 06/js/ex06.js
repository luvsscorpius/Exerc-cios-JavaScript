// Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.

const num = document.getElementById('num')
const btn = document.getElementById('btn')
const res = document.getElementById('res')

function inverter() {
    var numero = num.value
    var resultado = 0
    if (numero == ''){
        res.innerHTML = "Insira um número antes de prosseguir."
    } else {
        while (numero != 0) {
            resultado = resultado * 10
            resultado = resultado + numero % 10
            numero = Math.trunc(numero / 10)
        }
        res.innerHTML = `A inversão do número informado é: <strong>${resultado}</strong>`;
    }
}


btn.addEventListener('click', inverter)