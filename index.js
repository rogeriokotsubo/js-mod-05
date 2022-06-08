document.getElementById('btn-calc').addEventListener('click', Exibir);

function Exibir() {
  const resultFinal= document.querySelector('#p-result');
  const numero = parseInt(document.querySelector('#numero').value.replace(",", "."),10);
  const nfloat = parseFloat(document.querySelector('#numero').value.replace(",", "."));

  if (isNaN(numero)) {
    alert('Valor inválido para o número.');
    return false;
  }

  if (nfloat-numero!==0){
    alert('Não é inteiro.');
    return false;
  }
  switch (numero) {
    case 0:
      resultFinal.textContent='Número inteiro escolhido: zero';
      break;
    case 1:
      resultFinal.textContent='Número inteiro escolhido: um';
      break;
    case 2:
      resultFinal.textContent='Número inteiro escolhido: dois';
      break;
    case 3:
      resultFinal.textContent='Número inteiro escolhido: três';
      break;
    case 4:
      resultFinal.textContent='Número inteiro escolhido: quatro';
      break;
    case 5:
      resultFinal.textContent='Número inteiro escolhido: cinco';
      break;
    case 6:
      resultFinal.textContent='Número inteiro escolhido: seis';
      break;
    case 7:
      resultFinal.textContent='Número inteiro escolhido: sete';
      break;
    case 8:
      resultFinal.textContent='Número inteiro escolhido: oito';
      break;
    case 9:
      resultFinal.textContent='Número inteiro escolhido: nove';
      break;
    case 10:
      resultFinal.textContent='Número inteiro escolhido: dez';
      break;
    default:  
      resultFinal.textContent='Número inteiro escolhido inválido';
  }
}
  