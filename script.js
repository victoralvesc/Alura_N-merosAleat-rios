// let numeroSecreto = parseInt((Math.random()*50))
// let tentativas = 5

// while (tentativas > 0) { let chute = 
//     parseInt(prompt("Digite um número de 1 a 50"))
//  if (chute == numeroSecreto) {
//     alert("Parabéns voce acertou!")
//     break
// } else if
//   (chute < numeroSecreto) {
//     alert("Tente novamente, o numero secreto é maior!")
//   tentativas = tentativas - 1
// } else if (chute > numeroSecreto) {
//     alert ("Tente novamente o numero secreto é menor!")
//   tentativas = tentativas - 1
// }
// }
//   if (chute != numeroSecreto) {
//     alert ("felizmente voce errou, o numero secreto era " + numeroSecreto)
//   }

  let numeroSecreto = parseInt(Math.random()*50)
  let vidas = 5
  let botao = document.getElementById('botao')
  let h2 = document.querySelector('h2')
  let h3 = document.querySelector('h3')
  
  function tentativa(){
    let chute = parseInt(document.getElementById('numero').value)
    while(vidas>0){
      if(chute==numeroSecreto){
       h2.textContent = "Muito Bem, você desafiou a IA!  O Código é:"+ numeroSecreto
       h3.textContent = ''
        break
      }
      else if(chute>numeroSecreto){
        h2.textContent = "Errado, o Número Secreto é Menor."
        vidas = vidas - 1
        h3.textContent = "Tentativas restantes: " + vidas
        break
      }
      else if(chute<numeroSecreto){
        h2.textContent = "Errado, o número sorteado é maior."
        vidas = vidas - 1
        h3.textContent = "Tentativas restantes: " + vidas
        break
      }
    }
    if(vidas==0){
      h2.textContent = "Suas tentativas acabaram, você perdeu!"
      h3.textContent = 'O Código era: ' + numeroSecreto 
     }
   }
   
   


//-------------Funções-----------//

//alert - exibido na tela a mensagem
//document.write - exite a mensagem na pagina HTML
//console.log - exite na tela de inspecionar o valor de retorno.
//while -(enquanto/tentativas) incluir número de tentativas loops
//break - quando cair no acerto ele irá para e nao testar novamente.
//Math.random()* - funcão para criar numero aleatório


