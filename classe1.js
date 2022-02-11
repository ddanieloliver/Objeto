class Lancamento {
    constructor(nome = 'Genérico', valor = 0){ //será transofromado em uma função construtora
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidaddo = 0
        this.lancamentos.forEach(l=>{
            valorConsolidaddo +=l.valor
        })
        return valorConsolidaddo
    } 
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario,contaDeLuz)
console.log(contas.sumario())