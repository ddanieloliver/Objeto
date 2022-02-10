// Json não é um Objeto, é na verdade um formato textual, formato de dados.
// É muito usado para comunicação de sistemas e pode ser lido em várisa linguagens

const obj ={ a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) //formato padronizado
console.log(JSON.parse('{ "a": 1, "b": "String", "c": true, "d": {}, "e": []}')) //formato padronizado

//Lembrando que não pode haver funçoes dentro de um JSON