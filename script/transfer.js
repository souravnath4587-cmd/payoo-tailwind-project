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

    }else{
        alert('Incorrect pin');
    }
});