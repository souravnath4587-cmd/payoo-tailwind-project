document.getElementById("cashIn_btn").addEventListener("click", function () {

    const bankName = valueFromInput("bank_name");
    if (bankName === "Select Bank") {
    alert("Please select a bank.");
    return;
    }

    const accountNumber = valueFromInput("account_number"); 
    if (accountNumber.length !== 11) {
    alert("Please enter a valid 11-digit account number.");
    return;
    }

    const cashInAmount = valueFromInput("cashIn_amount");
    if (cashInAmount <= 0)  {
    alert("Please enter a valid amount to add.");
    return;
    }

    const pinNumber = valueFromInput("bank_pin");
    if (pinNumber.length !== 4) {
    alert("Please enter a valid 4-digit pin number.");
    return;
    }else{
    alert("Money added successfully.");
     const balance = balanceFromInput("balance");
     const newBalance = Number(balance) + Number(cashInAmount);
     document.getElementById("balance").innerText = newBalance;
    
     // 1- history-container ke shore niye asbo
     const historyContainer = document.getElementById("historical_content");
     // 2- new div create korbo
     const newHistoryItem = document.createElement("div");
     // 3- new div e innerHtml add korbo
     newHistoryItem.innerHTML = `
       <div class="card_content p-4 flex flex-row justify-between items-center bg-white rounded-2xl ">
          <div class="card flex flex-row gap-8 items-center ">
            <div class="card_image p-4 rounded-full bg-[#0db89932]">
              <img src='./assets/opt-1.png' alt="Latest payment card">
            </div>
            <div class="card_detail">
              <h4 class="text-[20px] font-bold capitalize">${bankName}</h4>
              <p class="text-[#707070]">${new Date().toLocaleDateString()}</p>
            </div>
            <div class="card_amount">
             <h4 class="text-[20px] font-bold capitalize">${accountNumber}</h4>
              <p class="text-[#707070]">${cashInAmount}</p>
            </div>
  
          </div>
          <div class="ellipsis_icon ">
            <i class="fa-solid fa-ellipsis fa-2xl text-[#707070] rotate-90"></i>
          </div>
        </div>
     `;
     // 4- history-container e new div ta append korbo
     historyContainer.append(newHistoryItem);  
    }








}); 