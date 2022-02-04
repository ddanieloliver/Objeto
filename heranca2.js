Object.prototype.attr0 = 'Z' // isso é uma variavel global !devo evitar esse tipo de manipulação porque vai impactar na estrutura toda
const avo = {attr1 : 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.attrA)
console.log(filho.attr2)
console.log(filho.attr3) //aqui já foi encontrado o attr3 no filho, logo, não precisou acessar o pai

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing 
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // Nesse momento eu defini carro como protótipo de ferrari, ou seja, ferrari agora é um decendente de carro.
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())