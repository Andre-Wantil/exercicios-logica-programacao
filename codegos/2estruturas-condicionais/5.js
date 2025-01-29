const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function parOuImparMeuAmigo(sigma) {
    if (sigma % 2 === 0) {
        return `${sigma}? Esse número aí é par!`
    } else if (isNaN(sigma)) {
        return `(╯‵□′)╯︵┻━┻`
    } else if (sigma.toString().indexOf('.') !== -1) {
        return `Sem. Decimal.`
    } else {
        return `${sigma}? Esse número é ímpar!`
    }
}

rl.question(`Insira um número: `, number => {

    console.log(parOuImparMeuAmigo(number))

    rl.close()
})