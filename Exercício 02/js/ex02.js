// Escreva uma função que retorne o cubo de um número fornecido pelo usuário.

function calcularCubo() {
    const res = document.getElementById('res')
    const numero = document.getElementById('numero')
    const num = numero.value
    const cubo = num ** 3

    if (num == '') {
        res.innerHTML = "A caixa de texto está vazia por favor informe um número"
    } else {
        res.innerHTML = `O cubo de ${num} é <strong>${cubo}</strong>.`
    }
}
