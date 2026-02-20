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

// machine id > hide all > show id
function showOnly(id){
  const transfer = document.getElementById("transfer");
  const transactions = document.getElementById("transactions");
  const cashOut = document.getElementById("cashout");
  const addMoney = document.getElementById("add_money");
  const payBill = document.getElementById("pay_bill");  
  const getBonus = document.getElementById("get_bonus"); 

  transfer.classList.add("hidden");
  transactions.classList.add("hidden");
  cashOut.classList.add("hidden");
  addMoney.classList.add("hidden"); 
  payBill.classList.add("hidden");
  getBonus.classList.add("hidden");

  const show = document.getElementById(id);
  show.classList.remove("hidden");
  
}