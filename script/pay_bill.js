document.getElementById('pay_now').addEventListener('click', function() {
    const billName = valueFromInput('bill_name');    
    const billAccountNumber = valueFromInput('bill_account_number');    
    const payAmount = valueFromInput('pay_amount');    
    const accountPin = valueFromInput('account_pin'); 
    const balance = balanceFromInput('balance');

     if (Number(payAmount) > Number(balance)) {
        alert("Insufficient balance to pay the bill.");
        return;
    }      

    if(billName === 'Select To Pay'){
        alert("Please enter a valid bill name.");
        return;
    }

    if (billAccountNumber.length !== 11) {
        alert("Please enter a valid 11-digit account number.");
        return;
    }   

    if (payAmount <= 0) {
        alert("Please enter a valid amount to pay.");
        return;
    }

    if (accountPin.length !== 4) {
        alert("Please enter a valid 4-digit pin.");
        return;
    }else{
        alert("Bill paid successfully.");
        const balance = balanceFromInput("balance");
        const newBalance = Number(balance) - Number(payAmount);
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
              <img src='./assets/opt-5.png' alt="Latest payment card">
            </div>
            <div class="card_detail">
              <h4 class="text-[20px] font-bold capitalize">${billName}</h4>
              <p class="text-[#707070]">${new Date().toLocaleDateString()}</p>
            </div>
            <div class="card_amount">
             <h4 class="text-[20px] font-bold capitalize">${billAccountNumber}</h4>
              <p class="text-[#707070]">${payAmount}</p>
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