// oq eu quero?
// em contato, 

// ao clicar no botão enviar
//     se os campos nome ou email não estiverem preenchidos
//     pedir para preencher
// se o campo não preenchido for mensagem/textarea 
//  pedir para escrever uma mensagem


function entrarEmContato(){
      
    if(document.getElementById('nome').value === ""
        || document.getElementById('email').value === ""
            || document.getElementById('mensagem').value === ""){
        alert("Por favor, preencha os campos obrigatórios.")
    }   
    else{
        alert("Seu contato foi realizado com sucesso. Em breve entrarei em contato. Até mais!")

    }
}

document.getElementById('botao_contato').addEventListener("click", entrarEmContato)

