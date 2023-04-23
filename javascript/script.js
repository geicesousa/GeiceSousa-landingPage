document.getElementById('botao_contato').addEventListener("click", function entrarEmContato(){
      
    if(document.getElementById('nome').value === ""
        || document.getElementById('email').value === ""
            || document.getElementById('mensagem').value === ""){
       getElementById('contato--formulario').reportValidity()
    }   
    else{
        alert("Seu contato foi realizado com sucesso. Entrarei em contato em breve. Até mais!")

    }
})

