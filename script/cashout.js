document.getElementById('cashout_btn').addEventListener('click', () => {
    // 1- get the agent number and validation :
    const agent = valueFromInput('agent_number');
    if (agent.length !== 11) {
        alert("Invalid Agent number");
        return;  
    }

    // 2- get the amount , validation ,convert to number:
   const amount = valueFromInput('cashout_amount');

    // 3- get the current balance , validation ,convert to number:
    // const balanceElement = document.getElementById('balance');
    // const balance = balanceElement.innerText;
    const balanceElement = document.getElementById('balance');
    const balance = balanceFromInput('balance');

    // 4- calculate new balance,
    const newBalance = Number(balance) - Number(amount);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    console.log(newBalance)
    // 5- get the pin and verify,
    const pin = valueFromInput('cashout_pin');
    if (pin === '1234') {
        alert('Cash out success full.');
        balanceElement.innerText = newBalance;

        // 1- history-container ke shore niye asbo
     const historyContainer = document.getElementById("historical_content");
     // 2- new div create korbo
     const newHistoryItem = document.createElement("div");
     // 3- new div e innerHtml add korbo
     newHistoryItem.innerHTML = `
       <div class="card_content p-4 flex flex-row justify-between items-center bg-white rounded-2xl ">
          <div class="card flex flex-row gap-8 items-center ">
            <div class="card_image p-4 rounded-full bg-[#0db89932]">
              <img src='./assets/opt-2.png' alt="Latest payment card">
            </div>
            <div class="card_detail">
              <h4 class="text-[20px] font-bold capitalize">Cash Out</h4>
              <p class="text-[#707070]">${new Date().toLocaleDateString()}</p>
            </div>
            <div class="card_amount">
             <h4 class="text-[20px] font-bold capitalize">${agent}</h4>
              <p class="text-[#707070]">${amount}</p>
            </div>
  
          </div>
          <div class="ellipsis_icon ">
            <i class="fa-solid fa-ellipsis fa-2xl text-[#707070] rotate-90"></i>
          </div>
        </div>
     `;
     // 4- history-container e new div ta append korbo
     historyContainer.append(newHistoryItem);  
    } else {
        alert("Invalid pin number")
    }
    // 5 1- true : show an alert > set balance ;
    // 5 2- false : show an error alert > return;
})