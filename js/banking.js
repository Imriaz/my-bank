//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    //update deposite total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    //update account balance

    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;

    //Clear the deposite input field
    depositInput.value = '';
});

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');

    const newWithdrawAmount = parseFloat(withdrawInput.value);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    //update balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;


    //clear withdraw input
    withdrawInput.value = '';
})