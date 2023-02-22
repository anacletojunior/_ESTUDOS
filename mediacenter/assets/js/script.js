/*let nome = "Anacleto"
let sobrenome = "Junior"

let nomecompleto = `Nome: ${nome} ${sobrenome}`

console.log(nomecompleto)

let x = 40
let y = 10
console.log(x>y)

let w = "10"
let z = 10
console.log(w===z)

let a = 10
let b = 5
console.log(a != b)

let preco = 22
if (preco < 45) {
    console.log("carna barata")
}
else {console.log("carne cara")

} 
console.log


let idade = 19

if (idade <= 17) {
    console.log("Voce e menor")
}

else if (idade >= 18 && idade <= 59) {
    console.log("Voce e adulto")
}


else if (idade >= 60) {
    console.log("Voce e idoso")
}


let ismember = true

let shipping = ismember ? 9.8 : 10

console.log("Frete: "+ shipping)

let profession = "programador" 

    console.log("Profissão: "+profession)

    switch(profession) {
    
    case "fiscal":
        console.log("sua camisa sera VERDE")
    break

    case "bombeiro":
        console.log("sua camisa sera VERMELHA")
    break

    case "policial":
        console.log("sua camisa sera AZUL")
    break

    default:
        console.log("sua camisa sera PRETA")
    break

}



function gravidade() {
    console.log("a gravidade do planete é: "+ shipping)
 
}

gravidade()

*/
//exercicio 4

/*
let x =40
let y = 10

function calpct(n1, n2) {
    return (n2/n1)*100
    
}

let pct = calpct(x , y)
console.log(`${pct}% de ${x} e ${y}`)


//exercio 5

function calcularImovel (metragem, quartos){
    let m2 = 3000
    let preco = true
    switch (quartos) {
        case 1:
        default:
        preco = metragem * m2
        break

        case 2:
        preco = metragem * (m2*1.2)
        break
        
        case 3:
        preco = metragem * (m2*1.5)
        break
    }
    return preco

}

let metragem = 200
let quartos = 2
let preco = calcularImovel(metragem, quartos)
console.log(`A casa custa R$ ${preco}`)


// exercicio 6

function validar(usuario, senha) {
 if (usuario =="bonieky" && senha == "123") {
    return true
 } else {
    return false
 }
}



let usuario = "boniekY"
let senha = "123"
let validacao = validar(usuario, senha)
//if (validacao) {
if (validar(usuario, senha))  {
    console.log("Acesso CONCEDIDO")
    } else {
        console.log("Acesso NEGADO")
    }


/*
function somar(x, y) {
    return x - y
}
console.log(somar(10,5))


const somar = (x, y) => {
    return x + y
}
console.log(somar(10,5))


const somar = (x, y) => x+y
console.log(somar(10,5))

//tudo igual
function sobrenome(sob) {
    return "Bonieky " + sob
}
console.log(sobrenome('Lacerda'))
*/

/*
const sobrenome = (sob) => {
    let nomecompleto = 'Bonieky '+ sob
    return nomecompleto
}
console.log(sobrenome('Lacerda'))
*/

/*
const sobrenome = (sob) => {
    return 'Bonieky ' + sob
}
console.log(sobrenome('Lacerda'))
*/

/*
const sobrenome = (sob) => 'Bonieky '+ sob
console.log(sobrenome('Lacerda'))
*/

/*
const sobrenome = sob => 'Bonieky '+ sob
console.log(sobrenome('Lacerda'))
//tudo igual



let count = 0

function add() {
    //count = count+1
    //count += 1
    count++
}

add()
add()
add()


console.log(count)


function square(x) {
    return x * x
}

function addsquare(a, b) {
    let sqrA = square(a)
    let sqrB = square(b)
    return sqrA+sqrB
}

console.log(addsquare(3,4))


//arrays
let colors = ['blue', 'red', 'green']

console.log(colors)


let idade = [12, 18, 60]

console.log(idade[0])


let lista = [colors, idade]

console.log(lista[0][1])


let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'leite',
    'açucar'
]
//pop remove o ultimo item
//shift remove o primeiro item
ingredientes.pop()
//ingredientes[5] = 'cebola'
//push adiciona item
ingredientes.push(`cebola`)

console.log(`total de ingredientes: ${ingredientes.length}`)

//qual numero pega a ferrari?
let carros = ['BMW', 'FERRARI', 'MERCEDES']

let x = 1

console.log('1. '+ carros[x])

// troque a ferrari por um audi
carros[1] = 'Audi'
console.log('2. lista com Audi')
console.log(carros)


// adicione o Volvo a lista
carros.push('Volvo')
console.log('3. lista com Volvo')
console.log(carros)


// exiba quantos itens tem array
console.log('4. itens no array')
console.log(carros.length)

*/


/*
let personagem = {
    nome: 'Bonieky',
    idade: 35,
    pais: 'Brasil',
    olhos: ['pretos', 'azuis'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15

    }
}

console.log(`${personagem.nome} tem ${personagem.idade} anos`)
console.log(`Olhos ${personagem.olhos[1]}`)
console.log(`Magia ${personagem.caracteristicas.magia}`)

personagem.nome = 'Pedro'
console.log(personagem.nome)

personagem.caracteristicas.forca += 5
console.log(personagem.caracteristicas.forca)


personagem.olhos.push('Verde')
console.log(personagem.olhos)


let personagem2 = {
    nome: 'Bonieky',
    idade: 35,
    carros: [
        {modelo: "Fiat", cor: "Preto"},
        {modelo: "Ferrari", cor: "Vermelha"}
    ]
}

console.log(personagem2.carros[1].modelo)


let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90,
    nomecompleto: function() {
        //return this.nome + " " + this.sobrenome
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomecompleto())


for(let n=1; n<=5; n++) {
    console.log('Frase qualquer'+n)
}

let cores = ['preto', 'branco', 'azul', 'vermelho']
cores.push('verde')

// 3 formas de obter o mesmo resultado
for (let n=0; n<cores.length; n++) {
    console.log(cores[n])
}

for(let i in cores) {
    console.log(cores[i])
}
 
for (let cor of cores) {
    console.log(cor)
}
//

let colors = [
    {nome: 'preto', qt: 10},
    {nome: 'branco', qt: 5},
    {nome: 'azul', qt: 15},
    {nome: 'vermelho', qt: 8}
]
for (let cor of colors) {
    console.log(cor)
}


for (let i in colors) {
    colors[i].nome = colors[i].nome.toUpperCase()
}
console.log(colors)
*/


/*
//mesma coisa
let numero = 1 

while (numero <= 10) {
    console.log(`O numero e ${numero}`)
    numero++
}

console.log('acabou')

for(let numero=0; numero <=10; numero++) {
    console.log(`O numero e ${numero}`)
}
//mesma coisa
*/



/*contar de 1 ate 100
let n1 = 1
while (n1 <= 100) {
    console.log(`${n1}`)
    n1++
}

*/

/*
//exibir nome das frutas
let frutas = ['maçã', 'uva', 'laranja', 'banana']
    
for (let frut of frutas) {
    console.log(frut)
}

frutas.push('kiwi')
console.log(frutas)
console.log(frutas.length)

frutas.shift()
console.log(frutas)

frutas.pop()
console.log(frutas)

console.log(frutas.join(' '))
console.log(frutas.join(', '))
console.log(frutas.join(' -> '))

frutas[1] = 'maracuja'
console.log(frutas)

console.log(frutas.length)

frutas[frutas.length - 1] = 'laranja'
console.log(frutas)

frutas.pop()
frutas.push('banana')
console.log(frutas)
*/

//organizar arrays
let fruits = ['maçã', 'uva', 'laranja', 'banana']
console.log(fruits)

fruits.sort();
console.log(fruits)

fruits.reverse();
console.log(fruits)

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'GM', year: 2020}
]
console.log(cars)
/*
cars.sort((a, b) => {
    if(a.year > b.year) {
        return 1;
    } else if(a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
    
})
console.log(cars)
*/

cars.sort((a, b) => {
    return a.year - b.year
})
console.log(cars)

cars.sort((a, b) => {
    return b.year - a.year
})
console.log(cars)

cars.sort((a, b) => a.year - b.year)
console.log(cars)

/*filtro
let bigfuits = fruits.filter((item) => {
    return item.length > 4
})

console.log(bigfuits)
*/

let bigfruits = fruits.filter((item) => item.length > 4)
console.log(bigfruits)

console.log(fruits)

let shortfruits = fruits.filter((item) => item.length <= 4)
console.log(shortfruits)


//procura item pele tamanho value
let ok = fruits.every((value) => {
    return value.length > 3
})

if (ok) {
    console.log('Todos sao maiores q 3')
} else {
    console.log('Nao sao todos maiores q 3')
}

let ok2 = fruits.some((value) => {
    return value.length > 3
})

if (ok2) {
    console.log('Alguns sao maiores que 3')
} else {
    console.log('Nao sao maiores q 3')
}

// achar um item (dif maius e minus)
if (fruits.includes('uva')) {
    console.log('Tem uva sim')
} else {
    console.log('nao tem uva nao')
}

/*botao de clique
function clicou() {
    console.log("clicou no botao")
}
const home = document.querySelector(".active")
home.addEventListener("click", clicou)


//altear conteudo
function clicou() {
    const lista = document.querySelector('#lista')
    console.log(lista.innerHTML)
    //lista.children[0].innerText = 'MUDOU'
    lista.children[0].innerHTML = '<strong>MUDOU</strong>'
}
*/
/*
//adicionar conteudo ne memoria (menu) no final
function clicou() {
    const selectUL = document.querySelector('#lista')
    let newli = document.createElement("li")
    newli.innerText= 'NOVO'
    selectUL.appendChild(newli)
    console.log(selectUL)
}


//adicionar conteudo ne memoria (menu) no comeco
function clicou() {
    const selectUL = document.querySelector('#lista')
    let newli = document.createElement("li")
    newli.innerText= 'NOVO'
    selectUL.prepend(newli)
    console.log(selectUL)
}

//verificar atributos de um declaracao
function clicou() {
    const input = document.querySelector('input')
    
    if (input.hasAttribute('placeholder')) {
        console.log('Tem placeholder SIM')
    } else {
        console.log('NAO tem placeholder')
    }
    
}
*/

//mudar atributos de uma declaracao (obter abributo e mudar atributo)
function clicou() {
    const input = document.querySelector('#pass')
    const botao = document.querySelector('#cadastro')
    //input.setAttribute('type', 'text')
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text')
        botao.innerText = 'Ocultar senha'
    } else {
    input.setAttribute('type', 'password')
    botao.innerText = 'Mostrar senha'
    }
}

function apertou() {
    console.log('APERTOU')
}


function segurou() {
    console.log('SEGUROU')
}

/*
function soltou(e) {
    console.log(e.key)
}

document.addEventListener('keyup', soltou)


function clicou2() {
    const input = document.querySelector('#pass')
    const botao = document.querySelector('#cadastro')

}

//Elementos
const input = document.querySelector('#additem')
const lista = document.querySelector('.lista2')



//Funcoes
function handlekeyup(e) {
    if (e.key === "Enter") {
        //veriicanto oq foi digitado
        //console.log(input.value)

        //da certo mas e a forma errada abaixo
        //lista.innerHTML += '<li>' + input.value + '</li>'

        //Adicionar elemento li na lista
        const newli = document.createElement('li')
        newli.innerHTML = input.value
        lista.appendChild(newli)

        //limpar o campo de texto
        input.value = ''
        
    }
    

}

//eventos
input.addEventListener('keyup', handlekeyup)

Orioentacao a objetos
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age

    }
}

let p1 = new Person("Joao", 20)
let p2 = new Person("Maria", 20)
let p3 = new Person("Pedro", 40)

console.log(p1.name)
console.log(p3.age)

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age

    }
}

let p1 = new Person("Joao", 20)
let p2 = new Person("Maria", 20)
let p3 = new Person("Pedro", 40)

console.log(p1.name)
console.log(p3.age)
*/

class Person {

    _age = 0 
    steps = 0

    constructor(firstName, lastName) {
       
        this.firstName = firstName
        this.lastName = lastName
    }

    takeaStep() {
        this.steps++
    }

    get age() {
        return this._age
    }

    set age(x) {
        if (typeof x == "number") {
            this._age = x
        }
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let p1 = new Person("Joao", 'Silva')
let p2 = new Person("Maria", 'Leite')
let p3 = new Person("Pedro", 'Duarte')

p1.takeaStep()
p1.age = 20


console.log(`P1 = ${p1.fullName} tem ${p1.age} anos`)
console.log(`P2 = ${p2.fullName} tem ${p2.age} anos`)
console.log(`P3 = ${p3.fullName} tem ${p3.age} anos`)
console.log(`Passos de ${p1.fullName}: tem ${p1.steps} passos`)

console.log('teste')