//menu spam

//2 formas de fazer o mesmo efeito
/*1
function menuToggle() {
    let menuArea = document.getElementById('menu-area');

    if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened')
    } else {
        menuArea.classList.add('menu-opened')
    }

}
*/
function menuToggle() {
let menuArea = document.getElementById('menu-area')

if(menuArea.style.width == '300px') {
    menuArea.style.width = '0px'
} else {menuArea.style.width = '300px'
}
}


let hj = new Date()

console.log(hj.getDay())


let dia = hj.getDay()
let diaNome = ''

switch(dia) {
    case 1:
        diaNome = 'segunda-feira'
        break

    case 2:
        diaNome = 'terca-feira'
        break


    case 3:
        diaNome = 'quarta-feira'
        break

    case 4:
        diaNome = 'quinta-feira'
        break

    case 5:
        diaNome = 'sexta-feira'
        break

    case 6:
        diaNome = 'sabado'
        break
        
    case 0:
        diaNome = 'domingo'
        break

}



/*
switch(dia) {
    case 6:
    case 7:
        diaNome = 'Final de semana'
        break

    default:
        diaNome = 'Dia de semana'
        break

}
*/

document.getElementById('dia').innerHTML = "Hoje e: "+diaNome;


//for loop
//for loop array

/*
let texto = ''

for(let i = 0; i < 50; i++) {
    texto = texto + i + '<br/>'
}

document.getElementById('demo').innerHTML = texto



let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla', 'Ford']

let html = '<ul>'

for(let i in carros) {
    html += '<li>'+carros[i]+'</li>'
}

html += '</ul>'


document.getElementById('demo').innerHTML = html

*/

/*

let html = ''
let c = 1


while(c <= 10) {
    html += 'Numero: '+c+'</br/>'+'</br/>'
    c++

} 


//mesma coisa que acima
for(let c = 1; c <= 10; c++) {
   html += 'Numero: '+c+'</br>'+'</br>' 
}

document.getElementById('demo').innerHTML = html
*/

function trocar1(img) {

    document.querySelector('.imagem').setAttribute('src', img)
    console.log(img)
            
}

function subirtela() {
    window.scrollTo({
        top:0, 
        left: 0, 
        behavior: "smooth"
    })
}

function decidirbotaoscll() {
    if(window.scrollY === 0) {
        //ocultar botao
        document.querySelector('.scrollbutton').style.display = 'none'
    } else {
        //mostrar o botao
        document.querySelector('.scrollbutton').style.display = 'block'

    }
}

window.addEventListener('scroll', decidirbotaoscll)



/*

//MANIPULACOES DE STRINGs para DECORAR
let nome = 'Anacleto Rodrigues Quintino Junior'
let nome2 = '             ANACLETO            '

let resultado = nome.replace('Quintino', 'Cavalcante') 
//let resultado = nome.substr(8, 10)

//funcoes de String
console.log(nome)
console.log(resultado)
console.log(nome.length)
console.log(nome.indexOf('R'))
console.log(nome.substr(8, 10))
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome2)
console.log(nome2.trim())
console.log(nome.charAt(9)) //iguais
console.log(nome[9]) //iguais
console.log(nome.split(' '))//divide um string em array

//funcoes de numero
let n = 10
let nstr = '10'
let n0 = 10.6546416842136
let res = n.toString()
let resn0 = n0.toFixed(2)//arredondar


console.log(n+5)
console.log(res+5)
console.log(resn0)
console.log(parseInt(nstr))  // usar parseFloat se for numero decimal


//funcoes array
lista = (nome.split(' '))


console.log(lista)
console.log(lista.toString())
console.log(lista.join(' '))
console.log(lista.join('-'))
console.log(lista.join(','))
console.log(lista.join('.'))
console.log(lista.indexOf('Junior'))
console.log(lista.indexOf('Anacleto'))
console.log(lista.shift()) //remove o primeiro item do array
console.log(lista.pop()) //remove o ultimo item do array
console.log(lista)

console.log(lista.push('Cavalcante')) // add item ao final
console.log(lista)

lista [lista.length] = 'Martins' // add item ao final
let lista2 = lista
console.log(lista2)


let lista3 = ['Maria', 'Das', 'Neves', 'Silva']
console.log(lista3)

let lista4 = lista2.concat(lista3)

console.log(lista4) //juntar array


console.log(lista4.splice( 3, 2)) //1 o indice a remover, 2 qtd de intens a remover
console.log(lista4)

console.log(lista4.sort()) //ordem alfabetica
console.log(lista4.reverse()) //inverte a ordem / para colocar de Z a A deve usar sort antes



let listn1 = [45, 4, 9, 16, 25]
let listn2 = []

//duas formas de fazer a mesma coisa
//map roda funcao em cada item do array e gera um outro array com a funcao

listn2 = listn1.map(function(item) {
    return item * 2
})


for(let i in listn1) {
    listn2.push(listn1[i] * 2)
}

let res1 = listn2

console.log(res1)

//filtros
res2 = res1.filter(function(item2) {
    if(item2 < 40) {
        return true;
    } else {
        return false
    }
})

console.log(res2)

let d = new Date()

console.log(d.toDateString())

function showTime() {
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let txt = h+':'+m+':'+s
    
    document.querySelector('#demo').innerHTML = txt
}

let timer = setInterval(showTime, 1000)
*/


//desontruido array / strings
let pessoa = {
    nome: 'Anacleto',
    sobrenome: 'Junior',
    idade: '39', 
    social: {
        facebook: 'jrkimera',
        instragram: 'kimera',
        twiter: 'kimera1'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

let {nome, sobrenome, idade} = pessoa

console.log(pessoa.social.facebook)




let numeros = [1, 2,3,4]
//spread
let outros = [...numeros, 5,6,7,8]

console.log(outros)

//usando a variavel pessol la de cima
let novapessoa = {
    ...pessoa, 
    cidade: 'Sao Paulo',
    estado: 'SP',
    pais: 'Brasil'
}


console.log(novapessoa.social.twiter)


//rest  


function adicionar(nomes1, ...nomes2) {
    let novosconj = [
    ...nomes1, 
    ...nomes2
    ]
    return novosconj
}


let nomes1 = ['Anacleto', 'Rodrigues']
let nomes2 = ['Quintino', 'Junior']

console.log(adicionar(nomes1, 'Teste'))

//procurar valores com includes
console.log(outros.includes(7))


//repeat
console.log(novapessoa.nome.repeat(3))

//OBJECT PARA DEBUGAR/descobrir oq tem nos OBJETOS
console.log(Object.keys(novapessoa))
console.log(Object.values(novapessoa))
console.log(Object.entries(novapessoa))
console.log(Object.values(novapessoa.social))



//preenchendo automatico
let telefone = '555'

console.log(telefone.padEnd(9,'*'))
console.log(telefone.padStart(9,'*'))


//escondendo items com padEnd / PadStart / Slice
let cartao = '1651123412341234'

console.log('Este e o seu cartao? '+cartao)

let lastdigits = cartao.slice(-4)

let cartaoMascarado = lastdigits.padStart(16, '*')

console.log('Este e o seu cartao? '+cartaoMascarado)



//callbak e promise  //sincrono 
function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log('Pegando temperatura...')

        setTimeout(function() {
            resolve('40 na sombra')
        }, 2000);
    })
}

let temp = pegarTemperatura()
console.log(temp)

temp.then(function(resultado) {
    console.log('TEMPERATURA: '+resultado)
})


temp.catch(function(error) {
    console.log('Eita deu erro!')
})


/*
//MONTANDO UM BLOG COM REQUISICAO JSON
function loadposts() {
    document.getElementById('demo').innerHTML = 'Carregando...'

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(posts) {
            return posts.json()
        })
        .then(function(json) {
            montarblog(json)
           
        })

        .catch(function(error) {
            console.log('Náo foi possivel carregar os posts')
        })
}

function montarblog(listabloq) {
    let html = '' 
    
    for(let i in listabloq) {
        html +='<h3>'+ listabloq[i].id + ' - ' + listabloq[i].title+'</h3>'
        html += listabloq[i].body+'<br/>'
        html += '<hr/>'

    }
    
    document.getElementById('demo').innerHTML = html
}
*/


//mesma coisa usando o ASYNC E AWAIT
async function loadposts() {
    document.getElementById('demo').innerHTML = 'Carregando...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json()
    montarblog(json)
}

function montarblog(listabloq) {
    let html = '' 
    
    for(let i in listabloq) {
        html +='<h3>'+ listabloq[i].id + ' - ' + listabloq[i].title+'</h3>'
        html += listabloq[i].body+'<br/>'
        html += '<hr/>'

    }
    
    document.getElementById('demo').innerHTML = html
}


/*
//inserindo com POST

async function postar() 
{
    document.getElementById('demo').innerHTML = 'Çarregando...'

    let req2 = await fetch('https://jsonplaceholder.typicode.com/posts', 
    {
        method: 'POST', 
        body: JSON.stringify({
            title: 'Titulo de teste', 
            body: 'Corpo de teste', 
            userId: '4'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
        let json = await req2.json();
        
        console.log(json)
    })

}
*/

function enviar() {
    let arquivo = document.getElementById('arquivo').files[0]

    console.log(arquivo)
}


