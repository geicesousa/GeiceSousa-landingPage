document.querySelector('#botao_contato').addEventListener("click", (e) => {
    e.preventDefault();
    
    const nome = document.querySelector('#nome');
    const email = document.querySelector('#email');
    const mensagem = document.querySelector('#mensagem');
    const mensagemEnvio = document.querySelector('#mensagem-envio');
    const form = document.querySelector('#contato--formulario');
    console.log(nome, email,mensagem)

    if(nome.value === '' || email.value === '' 
        || mensagem.value === ''){
        form.reportValidity();
    } else{
        mensagemEnvio.innerHTML = "Seu contato foi realizado com sucesso. Entrarei em contato em breve. Até mais!";
        form.reset();
    }
});
        // || document.querySelector('#email').value === ""
            // || document.querySelector('#mensagem').value === ""
// document.querySelector('#contato--formulario').reportValidity()
    //   
    // }

