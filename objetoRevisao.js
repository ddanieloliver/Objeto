// coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro ={
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco :{
            logradouro : 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome : 'Ana',
        idade: 42
    }],
    calcularValorDoSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro ['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)
console.log(carro.condutores) // não gera erro porque carro existe, mas condutores foi deletado, logo não existe mais.
// console.log(carro.condutores.length) // gera erro porque carro existe, mas condutores foi deletado, logo por isso, não há como checar o comprimento de algo que não existe


