//criando variaveis
// usando const
//variaveis do tipo const nao podem ser alteradas

const a = 10

//usando let, ese permite que seja realizada a alteração posteriormente

let b = 20


//toda a vez que for se reutilizado o código é interessante deixar dentro de uma função
// function teste(valor){
//     if (valor >10){
//         console.log('maior que 10')
//     }
// }
// teste(b)

// for (let contador = 0; contador < 10; contador++){
//     console.log(`Contador: ${contador}`)
// }

//Teste

//criar uma tabuada usando uma variavel e um for
// function tabuada(base){
//     for (let mult = 0; mult < 11; mult++){
//         console.log(`${base} x ${mult} = `,base*mult)
//     }
// }

//correção do Felipe
function tab(num){
    for(let i = 1; i <=10; i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}
tab(5)

// tabuada(8)

import PromptSync from "prompt-sync"
const prompt = PromptSync()

const numDigitado = Number(prompt('Digite um valor: '))
tab(numDigitado)
let tipo = typeof(numDigitado) //Identificando o tipo de dado que está contido na variavel numDigitado
console.log(tipo)