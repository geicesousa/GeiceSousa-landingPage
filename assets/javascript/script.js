// oq eu quero?
// em contato, 

// ao clicar no botão enviar
//     se os campos nome ou email não estiverem preenchidos
//     pedir para preencher
// se o campo não preenchido for mensagem/textarea 
//  pedir para escrever uma mensagem


function entrarEmContato(){
      
    if(document.getElementById('nome').value != ""
        && document.getElementById('email').value != ""){
         alert("Seu contato foi realizado com sucesso. Em breve entrarei em contato. Até mais!")
    }   
    else if(document.getElementById('mensagem').value == ""){
        alert("É necessário que você deixe uma mensagem!")
    }
    else{
        alert("Por favor, preencha os campos obrigtórios.")

    }
}
document.getElementsByClassName('botao_contato').addEventListener("click", entrarEmContato)


// function enviarEmail(){

//     if( document.getElementById('nome').value != ""
//         &&  document.getElementById('email').value != "" ){
//         alert("Pronto! Olhe sua caixa de entrada, o e-mail foi enviado.")
//     }
//     else{
//         alert("Por favor, preencha os dois campos para receber as informações no seu e-mail");
//     }
// }

// document.getElementById('botaoEnviar').addEventListener("click", enviarEmail)



 
