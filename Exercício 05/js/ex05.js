// Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.

const b = document.getElementById('base')
const a = document.getElementById('altura')
const btn = document.getElementById('calcular')
const res = document.getElementById('res')

function calcularArea() {
    const base = b.value
    const altura = a.value
    const area = (base * altura) / 2

    if (base == '' && altura == '') {
        res.innerHTML = `Insira valores antes de prosseguir.`
    } else {
        res.innerHTML = `A área do triângulo, a partir dos valores de base e altura fornecidos é <strong> ${area} </strong>cm².`
    }
}

btn.addEventListener('click', calcularArea)
