const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function idadePraVota(age) {
    if (age.toString().indexOf('.') !== -1) {
        return `Ninguém quer saber quantos meses de vida você tem. Você se acha especial por acaso?`
    } else if (age >= 16 && age < 17) {
        return `${age} anos? Já pode votar!`
    } else if (age > 100) {
        return `Uhhhhh... 💀`
    } else if (age >= 18) {
        return `${age} anos? Vai votar seu doido!`
    } else if (age < 16) {
        return `${age} anos? Nah, eu não votaria.`
    } else if (isNaN(age)) {
        return `-Fatal Error-`
    }
}

rl.question(`Insira a sua idade: `, idade => {

    console.log(idadePraVota(idade))

    rl.close()
})