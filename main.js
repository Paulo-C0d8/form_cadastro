const form = document.getElementById ('form-cadastro')
const Nome = []
const Tel = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

addLinha()
attTabela()
})

function addLinha() {
    const inputNomeCad = document.getElementById('nome-cad')
    const inputTelCad = document.getElementById('tel-cad')

    if(Nome.includes(inputNomeCad.value)) {
        alert(`O Nome: ${inputNomeCad.value} já foi incluso.`)
    } else {
        Nome.push(inputNomeCad.value)
        Tel.push(parseInt(inputTelCad.value))

        let linha = '<tr>'
        linha += `<td> ${inputNomeCad.value} </td>`
        linha += `<td> ${inputTelCad.value} </td>`
        linha += '</tr>'
        
        linhas += linha
    }
        inputNomeCad.value = ''
        inputTelCad.value = ''
}

function attTabela () {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

