const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sustinho() {
    const inicio = "Deletando Sys32"
    const ponto = "."

    return `Deletando Sys32${setTimeout(() => { console.log(inicio + ponto) }, 2000)}${setTimeout(() => { console.log(inicio + ponto + ponto) }, 2000)}${setTimeout(() => { console.log(inicio + ponto + ponto + ponto) }, 3000)}${setTimeout(() => { console.log("Sys32 deletado espertinho (^人^)") }, 5000)}`
}

rl.question(`Insira um número: `, number => {

    if (number < 0) {
        console.log(`O número ${number} é negativo.`)
    } else if (number == 0) {
        console.log(`O número ${number} é 0 ヾ(≧▽≦*)o`)
    } else if (number > 0) {
        console.log(`O número ${number} é positivo.`)
    } else if (isNaN(number)) {
        console.log(sustinho())
    }

    rl.close()
})