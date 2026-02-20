function valueFromInput(id){
  const input = document.getElementById(id);
  return input.value;
}

function balanceFromInput(id){
  const balanceElement = document.getElementById(id);
  return balanceElement.innerText;
}

function getBalance(){
  const balance = document.getElementById("balance").innerText;
    return Number(balance);
}

function setBalance(value){
  const setBalance = document.getElementById("balance").innerText = value;
}