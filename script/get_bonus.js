document.getElementById("get_bonus_btn").addEventListener("click", function () {
    const bonusCode = valueFromInput("bonus_coupon");
    if (bonusCode === "2026BONUS") {
        alert("Congratulations! You've received a bonus of 10000$ units.");
        const balance = balanceFromInput("balance");
        const newBalance = Number(balance) + 10000;
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
              <img src='./assets/opt-4.png' alt="Latest payment card">
            </div>
            <div class="card_detail">
              <h4 class="text-[20px] font-bold capitalize">Bonus</h4>
              <p class="text-[#707070]">${new Date().toLocaleDateString()}</p>
            </div>
            <div class="card_amount">
             <h4 class="text-[20px] font-bold capitalize">${bonusCode}</h4>
              <p class="text-[#707070]">10000</p>
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
        alert("Invalid bonus code. Please try again.");
    }   
}); 