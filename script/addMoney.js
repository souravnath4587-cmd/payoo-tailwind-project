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
    }








}); 