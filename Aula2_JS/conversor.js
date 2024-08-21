// Conversor de Temperatura
// Crie uma função em JavaScript que converta uma temperatura de Celsius para Fahrenheit. A função deve:

// Receber um parâmetro numérico representando a temperatura em Celsius Calcular a temperatura equivalente em Fahrenheit Retornar o resultado arredondado para uma casa decimal

// Lembre-se que a fórmula para converter Celsius para Fahrenheit é: F = (C * 9/5) + 32

import PromptSync from "prompt-sync"
const prompt = PromptSync()

function converter(temp){
    let fahre = (temp * 9/5) + 32
    console.log(`A conversão de ${temp} C é igual a ${fahre} F `)
}

const tempDigitada = Number(prompt('Digite a temperatura a ser convertida: '))

converter(tempDigitada)
