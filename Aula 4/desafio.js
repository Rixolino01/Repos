class Estudante{
    constructor(nome, email, RA, curso, disciplinas){
        this.nome = nome,
        this.emial = email,
        this.RA = RA,
        this.curso = curso,
        this.disciplinas = disciplinas
    }
}

const estudante1 = new Estudante('Carlos', 'carlos.silva@gmail.com', 123344456, 'Data Science', ['Estásticia 1', 'Matemática 1','Números Algébricos'])

const estudante2 = new Estudante('Maria', 'maria.eduarda@gmail.com', 090909876,'Eng. Mecânica',['Trigonometria','cálculo','Engenharia na história'])

console.log(estudante1)
console.log(estudante2)