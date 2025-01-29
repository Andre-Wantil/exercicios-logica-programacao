const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tabuadaMaker3000(n) {
    if (isNaN(n)) {
        return console.log(`Eu cansei de tentar ser engraçado.`)
    } else if (n.toString().indexOf('.') !== -1) {
        return console.log(`Nah, I'd not calculate`)
    } else if (n <= 0) {
        return console.log(`Hell naw 💀`)
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`)
    }
}

rl.question(`Tabuada de que número? `, numero => {

    tabuadaMaker3000(numero)

    rl.close()
})