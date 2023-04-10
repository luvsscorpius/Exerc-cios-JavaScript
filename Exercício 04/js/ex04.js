// Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.
const numero = document.getElementById('numero')
const btn = document.getElementById('btn')

function raio() {
    const num = numero.value
    const res = document.getElementById('res')
    const pi = 3.14 

    const area = pi * (num ** 2)
    const perimetro = (num * 2) * pi
    if (num == '') {
        res.innerHTML = 'Insira um raio antes de prosseguir'
    } else {
        res.innerHTML = `A area de acordo é <strong> ${area} </strong> e o perimetro <strong> ${perimetro} </strong>`
    }
}





