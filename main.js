const txtNum = document.getElementById('txtNum')
const selNum = document.getElementById('selNum')
const res = document.getElementById('res')
let optNum = []
let maiorV = 1
let menorV = 100
let somaV = 0
let mediaV = 0

// Adicionando função ao clicar no botão adicionar
function add() {
    //Resetando div de resposta
    res.innerHTML = ''

    // Criando validação dos inputs
    if (txtNum.value == '' || txtNum.value > 100 || txtNum.value < 1) {
        alert('[ERRO] Insira um número entre 1 e 100')
    } else {
        let indexOptNum = optNum.indexOf(Number(txtNum.value))
        if (indexOptNum !== -1) {
            alert('[ERRO] Este número já foi inserido! Tente novamente')
        } else{

            // Criando um novo option
            optNum.push(Number(txtNum.value))
            
            let novoOpt = document.createElement('option')
            novoOpt.text = `Valor ${optNum[optNum.length - 1]} adicionado.`
            selNum.appendChild(novoOpt)
        }
    }
    txtNum.value = ''
}

// Adicionando função ao clicar no botão finalizar
function finalizar() {
    
    // Resetando de variaveis e limpando div
    res.innerHTML = ``
    somaV = 0
    mediaV = 0

    //Criando validação do select
    if (optNum.length == 0) {
        alert('[ERRO] Por favor insira um número para continuar a análise!')
    } else {

        // Encontrando valores
        for (const pos in optNum) {
            
            // Maior valor
            if (optNum[pos] > maiorV) {
                maiorV = optNum[pos]
            }

            // Menor valor
            if (optNum[pos] < menorV) {
                menorV = optNum[pos]
            }

            // Soma dos valores
            somaV += optNum[pos]

            // Media dos valores
            mediaV += optNum[pos] / optNum.length
        }

        // Criando os novos parágrafos
        let novoP = document.createElement('p')
        novoP.innerHTML = `
        <p>Ao todo, temos <strong>${optNum.length}</strong> números cadastrados</p>
        <p>O maior valor informado foi <strong>${maiorV}</strong>.</p>
        <p>O menor valor informado foi <strong>${menorV}</strong>.</p>
        <p>Somando todos os valores, temos <strong>${somaV}</strong>.</p>
        <p>A média dos valores digitados é <strong>${mediaV.toFixed(2)}</strong>.</p>
        `
        res.appendChild(novoP)
    }
}