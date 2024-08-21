/*function somar(a,b){
    let total = a + b
    return total
}
function imprimir(texto){
    console.log(texto)
}

//const teste = somar(10,30)
//console.log(teste)
//imprimir(teste)*/

const sub = (a,b) => {
    const total = a - b
    return total
}

function calcular(a,b,funcao){
    return funcao(a,b)
}

calcular(10,20,sub)


