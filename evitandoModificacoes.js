// Object.preventExtensions --> uso para evitar prolongar uma quantidade de atributos do meu objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) //usei isso para saber se meu objeto criado, no caso, produto, é extensivel.

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal --> "selar" não posso adicionar nem tirar atributos, mas posso mecher nos que já existem
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobreno = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes