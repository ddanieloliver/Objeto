const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // pega todas as chaves de um determinado obj
console.log(Object.values(pessoa)) // pega todas os valores de um determinado objeto
console.log(Object.entries(pessoa)) // pega os pares chave/valor

Object.entries(pessoa).forEach(([chave, valor]) => {
   console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { // define propriedades
    enumerable: true,
    writable: false,
    value:'01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign(ECMAScript 2015) -. concatena varios objetos em um só
const dest = {a: 1}
const o1 = {b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1,o2) //todos os objetos colocados depois do objeto de destino(1º parametro) vão ser sobrescritos e concatenados

Object.freeze(obj)
obj.c = 1234
console.log(obj)