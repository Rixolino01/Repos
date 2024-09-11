const lista = [2,3,4,5,6]
console.log(lista[0]) //2

const alunos =[
    ['Aluno1',10],
    ['Aluno2',6]
]

console.log(alunos[1][1])//6

const pessoa1 = {
    nome: "Teste",
    idade: 20,
    hobbies:['jogar','tv','programar']
}

console.log(pessoa1.nome)
console.log(pessoa1.hobbies[2])

function fabricaPessoas(nome, idade, hobbies){
    return{
        nome,
        idade,
        hobbies
    }
}

const pessoa2 = fabricaPessoas('Teresa','32',['Polo','Volley', 'Handball'])

const pessoa2JSON = JSON.stringify(pessoa2) //tranformando um objeto em um texto, formato JSON

console.log(pessoa2)
console.log(pessoa2JSON) // como transformar em um objeto -> JSON.parse(pessoa2JSON)

class Pessoa{
    constructor(nome, idade, hobbies){
        this.nome = nome
        this.idade = idade
        this.hobbies = hobbies
    }
    /**
     * recebe o nome da pessoa e faz uma apresentação
     * @returns Apresentação formal da pessoa
     */
    meApresentar(){
        return `Olá meu nome é ${this.nome}`
    }
}

const pessoa3 = new Pessoa('Fábio',26, ['Sinuca', 'badmingthon'])
pessoa3.idade = 37 //alternado a idade da pessoa 3 para 37 anos
console.log(pessoa3.meApresentar())