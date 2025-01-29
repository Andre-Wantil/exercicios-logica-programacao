const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = []
let resultado = 0;

function numberStoreSum() {
    numeros.forEach(numero => {resultado = resultado + parseFloat(numero)})
    return resultado
}



rl.question(`Coloca um número ai: `, numero1 => {
    if (isNaN(numero1)) {
        return rl.close(console.log(`Eu cansei de tentar ser engraçado.`))
    }
    numeros.push(numero1)
    rl.question(`Outro número: ` , numero2 => {
        if (isNaN(numero2)) {
            return rl.close(console.log(`Eu cansei de tentar ser engraçado.`))
        }
        numeros.push(numero2)
        rl.question(`Outro número: `, numero3 => {
            if (isNaN(numero3)) {
                return rl.close(console.log(`Eu cansei de tentar ser engraçado.`))
            }
            numeros.push(numero3)
            rl.question(`Outro número: `, numero4 => {
                if (isNaN(numero4)) {
                    return rl.close(console.log(`Eu cansei de tentar ser engraçado.`))
                }
                numeros.push(numero4)
                rl.question(`Outro número: `, numero5 => {
                    if (isNaN(numero5)) {
                        return rl.close(console.log(`Eu cansei de tentar ser engraçado.`))
                    }
                    numeros.push(numero5)
                    console.log(numberStoreSum())
                    rl.close()
                })
            })
        })
    })
    

})