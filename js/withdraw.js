// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('with connect')
    // step-2:
    const getWithDrawElement = document.getElementById('withdraw-field');
    const newWithDrawAmountString = getWithDrawElement.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);
    // console.log(newWithDrawAmountString);
    // step-3:
    getWithDrawElement.value = '';
    // step-4:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    // step-6:
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})