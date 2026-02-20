document.getElementById("get_bonus_btn").addEventListener("click", function () {
    const bonusCode = valueFromInput("bonus_coupon");
    if (bonusCode === "2026BONUS") {
        alert("Congratulations! You've received a bonus of 10000$ units.");
        const balance = balanceFromInput("balance");
        const newBalance = Number(balance) + 10000;
        document.getElementById("balance").innerText = newBalance;
    } else {
        alert("Invalid bonus code. Please try again.");
    }   
}); 