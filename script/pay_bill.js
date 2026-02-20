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
    }


});    