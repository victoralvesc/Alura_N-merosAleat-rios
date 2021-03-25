var numeroSecreto = parseInt((Math.random()*10)+1)
var tentativas = 3

while (tentativas > 0) { var chute = 
    parseInt(prompt("Digite um número de 1 a 10"))
 if (chute == numeroSecreto) {
    alert("Parabéns voce acertou!")
   tentativas = tentativas - 3
} else if
  (chute < numeroSecreto) {
    alert("Tente novamente, o numero secreto é maior!")
  tentativas = tentativas - 1
} else if (chute > numeroSecreto) {
    alert ("Tente novamente o numero secreto é menor!")
  tentativas = tentativas - 1
}
}
  if (chute != numeroSecreto) {
    alert ("felizmente voce errou, o numero secreto era " + numeroSecreto)
  }

  

//-------------Funções-----------//

//alert - exibido na tela a mensagem
//document.write - exite a mensagem na pagina HTML
//console.log - exite na tela de inspecionar o valor de retorno.
//while -(enquanto/tentativas) incluir número de tentativas loops
//break - quando cair no acerto ele irá para e nao testar novamente.
//Math.random()* - funcão para criar numero aleatório


