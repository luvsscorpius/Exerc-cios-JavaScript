// Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).

const pal = document.getElementById('entrada')
const btn = document.getElementById('btn')
const res = document.getElementById('res')

function contarVogal() {
    const palavra = pal.value
    if (palavra == '') {
        res.innerHTML = "Insira uma palavra para prosseguir."
    } else {
        res.innerHTML = palavra
    }
}

btn.addEventListener('click', contarVogal)
