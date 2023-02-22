
let cart = [];
let modalQt = 1;
let modalKey = 0;



const s = (el) => document.querySelector(el);
const sa = (el) => document.querySelectorAll(el);



//desmenbrando json doa lista de controles
controleJson.map((item, index) => {
    let controleItem = s('.models .controle-item').cloneNode(true);
    //preencher informacoes dos item
    
    controleItem.setAttribute('data-key', index)
    controleItem.querySelector('.controle-item--img img').src = item.img;
    controleItem.querySelector('.controle-item--name').innerHTML = item.name;
    controleItem.querySelector('.controle-item--price').innerHTML = 'R$ '+400+',00'; //`R$ ${item.price.toFixed(2)}`
    controleItem.querySelector('.controle-item--desc').innerHTML = item.description;
   
    //EVENTO QUE ABRE O MODAL
    controleItem.querySelector('a').addEventListener('click', (e) => {
        
        e.preventDefault();
        let key = e.target.closest('.controle-item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;
        
        s('.controleBig img').src = controleJson[key].img;
        s('.controleInfo h1').innerHTML = controleJson[key].name;
        s('.controleInfo--desc').innerHTML = controleJson[key].description;
        s('.controleInfo--actualPrice').innerHTML = 'R$ '+400+',00'//controleJson[key].price;

        s('.controleInfo--qt').innerHTML = modalQt;

        s('.controleWindowArea').style.opacity = 0; //item trasnp na tela
        s('.controleWindowArea').style.display = 'flex'; // exibe o item transp
        setTimeout(() => {
            s('.controleWindowArea').style.opacity = 1; 
        }, 150)
    });
        
    s('.controle-area').append(controleItem);
})

function closeModal() {
    s('.controleWindowArea').style.opacity = 0; //item trasnp na tela
    setTimeout(() => {
        s('.controleWindowArea').style.display = 'none'; // remove o item transp
    }, 200);
    
}

//aumentar diminuir quantidades no modal
s('.controleInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    s('.controleInfo--qt').innerHTML = modalQt;
    s('.controleInfo--actualPrice').innerHTML = 'R$ '+400*modalQt+',00'
})

s('.controleInfo--qtmenos').addEventListener('click', () => {
    if(modalQt > 1) {
    modalQt--;
    s('.controleInfo--actualPrice').innerHTML = 'R$ '+400*modalQt+',00'
    }
   
    s('.controleInfo--qt').innerHTML = modalQt;
})

//adicionar ao carrinho
s('.controleInfo--addButton').addEventListener('click', () => {
   
    //QUal o controle?
    let contr = controleJson[modalKey].name;
    console.log(contr)

    let repetidos = cart.findIndex((item) => item.mod == contr);
    console.log(repetidos)
       
    if (repetidos > -1) {
        cart[repetidos].qt += modalQt;
        console.log(cart);
        } else {
            cart.push({
            id: controleJson[modalKey].id,
            mod: controleJson[modalKey].name,
            qt: modalQt
            })
            console.log(cart);
                       
    }
    closeModal()
    updateCart() 

       
})

s('.menu-openner').addEventListener('click', () => {
    if(cart.length > 0 ) {
    s('aside').style.left = '0';
    }
})


s('.menu-closer').addEventListener('click', () => {
    s('aside').style.left = '100vw';
})


function updateCart() {
    

    if(cart.length > 0) {
        s('aside').classList.add('show');
        s('.cart').innerHTML = ''

        let subtotal = 0;
        let qtdItens = 0;
        let total = 0;
        

        for(let i in cart) {
                        
            let controleItem = controleJson.find((item) => item.id == cart[i].id);
            subtotal += controleItem.price * cart[i].qt;
            qtdItens += cart[i].qt;
            s('.menu-openner span').innerHTML = qtdItens;
                        
            

            console.log(controleItem)
            let cartItem = s('.models .cart--item').cloneNode(true);
                                    
            cartItem.querySelector('img').src = controleItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = controleItem.name;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if(cart[i].qt > 1) {
                cart[i].qt--;  
                } else {
                   cart.splice(i, 1) 
                }           
                
                updateCart()
            })
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++;
                updateCart()
            })
                       
            console.log(cartItem)
            s('.cart').append(cartItem)
            
        }
        
        total = subtotal;

        
       
        s('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        s('.qtditens span:last-child').innerHTML = qtdItens.toString().padStart(2,'0');
        s('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

        } else {
            s('aside').classList.remove('show');
            s('aside').style.left = '100vw';

    }
}



function fecharbarra() {
    if(s('aside').classList.value == 'show') {
        s('aside').classList.remove('show');
    }
}






