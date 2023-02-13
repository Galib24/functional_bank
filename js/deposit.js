
// step-1:
document.getElementById('btn-deposit').addEventListener('click', function(){
//   console.log('deposit mal')

// step-2:
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
// console.log(newDepositAmountString);

const newDepositAmount = parseFloat(newDepositAmountString);
// console.log(newDepositAmount);

// step-3:
depositField.value = '';

// step-4:
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

// step:5
const newDepositTotal = previousDepositTotal + newDepositAmount;
depositTotalElement.innerText = newDepositTotal;

})
