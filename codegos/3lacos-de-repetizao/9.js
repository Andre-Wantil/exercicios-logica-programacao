const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cauculoMaker4000(n) {
    if (isNaN(n)) {
        return console.log(`Eu cansei de tentar ser engraçado.`)
    } else if (n.toString().indexOf('.') !== -1) {
        return console.log(`Nah, I'd not calculate`)
    } else if (n <= 0) {
        return console.log(`Hell naw 💀`)
    }

    let soma = 0
    
    for (let i = 1; i <= n; i++) {
        soma = soma + i
        console.log(`posição ${i}: ${soma}`)
    }
}

rl.question(`Coloca um número grande ai: `, numero => {
    
    cauculoMaker4000(numero)

    rl.close()
})