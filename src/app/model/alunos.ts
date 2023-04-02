export class Alunos {
    
    //Não obriga a inicializar o atributo
    //nome!: string;
    nome: string;
    id: number;

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }
}