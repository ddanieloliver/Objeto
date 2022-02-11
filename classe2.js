class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //defini aqui que o protótipo de pai é avô
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) // aqui é uma forma de chamar o construtor padrão do meu prototipo, nesse caso, ele chamará this.sobrenome
        this.profissão = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)