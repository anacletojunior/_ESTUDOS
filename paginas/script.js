
/*
class Form {

    intems = []

    method = 'GET'

    constructor(container, method, action) {
        this.container = document.querySelector(container)
        this.method = method
        this.action = action

    }

    addItem(item) {
        this.intems.push(item)
    }

    render() {
        let formElement = document.createElement('form')
        formElement.setAttribute('method', this.method)
        formElement.setAttribute('action', this.action)

        for(let i in this .intems) {
            this.intems[i].render(formElement)
        }


        this.container.appendChild(formElement)
        
    }
}

class Input {

    _type = 'text'
    required = false
    
    constructor(name, label) {      

        this.name = name
        this.label = label
    }

    get type() {
        return this._type
    }

    set type(t) {
        if (['text', 'password', 'email', 'submit'].includes(t)) {
            this._type = t
        } else {
            throw new Error(`Input "${t}" type doest't exist.`)
        }
   
    }

    render(formElement) {
        let el = document.createElement('input')
        el.type = this.type
        el.name = this.name
        el.placeholder = this.label
        el.required = this.required
        formElement.appendChild(el)
        
    }


}

class Button extends Input {
    constructor(label) {
        super('', label)
        this.type = 'submit'
    }

    render(formElement) {
        let el = document.createElement('input')
        el.type = this.type
        el.value = this.label
        formElement.appendChild(el)

    }
}


//implementacao

//formulario
let form = new Form('.formArea', 'POST', 'https://site.com.br')


//email
let email = new Input("email", 'Digite seu e-mail')
email.type = 'email'
email.required = true
form.addItem(email)


//senha
let password = new Input("password", 'Digite sua senha')
password.type = 'password'
form.addItem(password)


//botao
let button = new Button('Enviar')
form.addItem(button)


console.log(form.intems)

form.render()


function clickCallback() {
    //alert("Clicou no botaozinho")
    fetch('https://jsonplaceholder.typicode.com/posts')
    //.then((data) => {
       // console.log(data)
    .then((response) => {
        return response.json()   
    })
    .then((json) => {
        console.log(json[0])
    })
}

document.querySelector('#botao')
    .addEventListener('click', clickCallback)
*/

function clickCallback() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json()   
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`)
        })

    
}

document.querySelector('#botao')
    .addEventListener('click', clickCallback)



let cab = document.getElementById('cab')
console.log(cab.innerText)

//array
let carro1 = [
    'Paulio',
    'Uno', 
    'Corola',
    'Ferrari'
]

console.log(`o carro ${carro1[2]} tem cambio automatico`)

//objeto
let carro2 = {
    nome: 'Fiat', 
    modelo: 'Uno', 
    peso: '800kg'
}

//como retornar
console.log(carro2['nome'])

//metodo mais comum hoje em dia
console.log(carro2.nome)


carros = [
    {nome:'Fiat', modelo:'Palio'}, 
    {nome:'Ford', modelo:'Ka'},
    {nome:'Toyota', modelo:'Corolla'},
    {nome:'Ferrario', modelo:'Spyder'},

]

console.log(carros[2].nome)


