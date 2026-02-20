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
    } else {
        alert("Invalid pin number")
    }
    // 5 1- true : show an alert > set balance ;
    // 5 2- false : show an error alert > return;
})