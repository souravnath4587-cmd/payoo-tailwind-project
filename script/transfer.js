document.getElementById('send').addEventListener('click', function (){
    const accountNumber = valueFromInput('bank_account_number');
    if(accountNumber.length !== 11){
        alert('Please enter a valid account number');
        return;
    }   
    const amount = valueFromInput('transfer_amount');
    if(amount < 0){
        alert('Please enter a valid amount');
        return;
    }
    
    const balance = balanceFromInput('balance');
    if(Number(amount) > Number(balance)){
        alert('Insufficient balance');
        return;
    }

    const pin = valueFromInput('transfer_pin');
    if(pin === "1234"){
        alert('Transfer successful'); 
        const newBalance = Number(balance) - Number(amount);
        document.getElementById('balance').innerText = newBalance; 

        // 1- history-container ke shore niye asbo
     const historyContainer = document.getElementById("historical_content");
     // 2- new div create korbo
     const newHistoryItem = document.createElement("div");
     // 3- new div e innerHtml add korbo
     newHistoryItem.innerHTML = `
       <div class="card_content p-4 flex flex-row justify-between items-center bg-white rounded-2xl ">
          <div class="card flex flex-row gap-8 items-center ">
            <div class="card_image p-4 rounded-full bg-[#0db89932]">
              <img src='./assets/opt-3.png' alt="Latest payment card">
            </div>
            <div class="card_detail">
              <h4 class="text-[20px] font-bold capitalize">Transfer</h4>
              <p class="text-[#707070]">${new Date().toLocaleDateString()}</p>
            </div>
            <div class="card_amount">
             <h4 class="text-[20px] font-bold capitalize">${accountNumber}</h4>
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

    }else{
        alert('Incorrect pin');
    }
});