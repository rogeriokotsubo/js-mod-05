document.getElementById('btn-check').addEventListener('click', Exibir);

function Exibir() {
  const inpdata = document.querySelector("#date").value;
  
  if (inpdata===""){
    alert('Por favor, entre com uma data.')
    return false;
  }

  date = new Date(inpdata+' ');
  dateIni = new Date("1970-01-01 ");
  document.querySelector("#dia").textContent='Dia: '+date.getDate();
  document.querySelector("#mes").textContent='Mês: '+(date.getMonth()+1);
  document.querySelector("#ano").textContent='Ano: '+date.getFullYear();
  document.querySelector("#dia-semana").textContent='Dia da Semana: '+getDdS(date);
  document.querySelector("#mes-nome").textContent='Mês em português: '+getMonthPT(date);
  document.querySelector("#timestamp").textContent='Data em ms (ref 01/01/1970): '+(date - dateIni);
}

function getDdS(date){
  let dds = "";
  switch (date.getDay()){
    case 0:
      dds='domingo';
      break;
    case 1:
      dds='segunda';
      break;
    case 2:
      dds='terça';
      break;
    case 3:
      dds='quarta';
      break;
    case 4:
      dds='quinta';
      break;
    case 5:
      dds='sexta';
      break;
    case 6:
      dds='sábado';
      break;
    default:  
    dds='indefinido';           
  }
  return dds;
}

function getMonthPT(date){
  let mesPT = "";
  switch (date.getMonth()){
    case 0:
      mesPT='janeiro';
      break;
    case 1:
      mesPT='fevereiro';
      break;
    case 2:
      mesPT='março';
      break;
    case 3:
      mesPT='abril';
      break;
    case 4:
      mesPT='maio';
      break;
    case 5:
      mesPT='junho';
      break;
    case 6:
      mesPT='julho';
      break;
    case 7:
      mesPT='agosto';
      break;
    case 8:
      mesPT='setembro';
      break;
    case 9:
      mesPT='outubro';
      break;
    case 10:
      mesPT='novembro';
      break;
    case 11:
      mesPT='dezembro';
      break;
    default:  
      mesPT='indefinido';
  }
  return mesPT;
}