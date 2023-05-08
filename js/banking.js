// Get Input Value
const getInputValue = (inputId) => {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value; //value as input field
  const amountValue = parseFloat(inputAmountText );
  //Clear The Input Field
  inputField.value = "";
  return amountValue;
}
// Get and Update Total
const updateTotalField = (totalFieldID, newAmount) => {
  const updateTotal = document.getElementById(totalFieldID);
  const previousAmountText = updateTotal.innerText; //innerText as not input field
  const previousAmountValue = parseFloat(previousAmountText);
  const newAmountTotal = previousAmountValue + newAmount;
  updateTotal.innerText = newAmountTotal;
}
//Get Current Balance
const getCurrentBalance = () =>{
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceText = balanceTotal.innerText; 
  const perviousBalance = parseFloat(previousBalanceText);
  return perviousBalance;
}  
// Update Balance
const updateBalance = (newAmount, isAdd) => {
  const balanceTotal = document.getElementById('balance-total');
  const perviousBalance = getCurrentBalance();
    if(isAdd == true){
      const newBalanceTotal =  perviousBalance + newAmount;
      balanceTotal.innerText = newBalanceTotal;
    }
    else{
      const newBalanceTotal =  perviousBalance - newAmount;
      balanceTotal.innerText = newBalanceTotal;
    }
}
//-------------------------Deposit Calculation-----------------//
document.getElementById('deposit-btn').addEventListener('click',function(){
  const newDepositAmount = getInputValue('deposit-input');
  if(newDepositAmount > 0){
    updateTotalField('deposit-total', newDepositAmount);
    updateBalance(newDepositAmount, true);
  } 
})
//-------------------------Withdraw Calculation-----------------//
document.getElementById('withdraw-btn').addEventListener('click',function(){
  const newWithdrawAmount = getInputValue('withdraw-input');
  const currentBalance = getCurrentBalance();
  if(newWithdrawAmount > 0  && newWithdrawAmount < currentBalance){
    updateTotalField('withdraw-total', newWithdrawAmount);
    updateBalance(newWithdrawAmount, false);
  } 
  if(newWithdrawAmount > currentBalance){
    alert("You can not withdraw more than what you have in your account")
  }
})
// Press Enter to Deposit
document.getElementById("deposit-input").addEventListener("keyup", function(e) {
  e.preventDefault();
  if ((e.key == "Enter" && e.value != "")) {
    document.getElementById("deposit-btn").click();
  }
});
// Press Enter to Withdraw
document.getElementById("withdraw-input").addEventListener("keyup", function(e) {
  e.preventDefault();
  if ((e.key == "Enter" && e.value != "")) {
    document.getElementById("withdraw-btn").click();
  }
});
