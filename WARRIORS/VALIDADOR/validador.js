
//bloquear acao padrao


let Validador = {
    handleSubmit:(event) => {
        event.preventDefault();
        let send = true;


        let inputs = form.querySelectorAll('input'); 

        for(let i=0 ; i<inputs.length ; i++) {

            let input = inputs[i];
            console.log(input);

            
            let check = Validador.checkInput(input)
            console.log(check)

            if (check !== true) {
                send = false;
                //exibir erro
                Validador.showError(input, check);
            }
            
        }


            send = false;
        if(send) {
            form.submit()
        
        }
        

    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');
    
        if (rules !== null) {
            rules = rules.split(',');
            for(let k in rules) {
                let rDetails = rules[k].split('=')
                switch(rDetails[0]) {
                    case 'required':
                        if(input.value == '') {
                            return 'Campo obrigatório';
                        }
                    break;
                 
                    
                    
                }
    
            }
        }
        return true;
    },
    showError:(input, error) =>  {
        input.style.borderColor = 'red';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);

    },
    clearErrors:() => {
        let errorElements = document.querySelectorAll('.error')
        for (let i=0; i < errorElements.length; i++) {
            errorElements[i].remove();
        }
    }

    
    
};






let form = document.querySelector('.cadastro');
form.addEventListener('submit', Validador.handleSubmit);

   /*
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');
    
        if (rules !== null) {
            rules = rules.split(',');
            for(let k in rules) {
                let rDetais = rules[k].split('=')
                switch(rDetais[0]) {
                    case 'require':
                        if(input.value == '') {
                            return 'Campo obrigatório';
                        }
                    break;
                 
                    
                    
                }
    
        }
    
    }
    */





