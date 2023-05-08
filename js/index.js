const getPin = () => {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if(pinString.length==4) {
    return pin;
  }
  else {
    return getPin();
  }
}
const generatePin = () => {
  const pin = getPin();
  document.getElementById('display-pin').value = pin;

}
document.getElementById('key-pad').addEventListener('click', function(event){
  const number = event.target.innerText;
  const calcInput = document.getElementById('typed-numbers');
  if(isNaN(number)) {
    if(number == 'C'){
      calcInput.value = '';
    }
  }
  else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
})
const verifyPin = () => {
  const generatedPin = document.getElementById('display-pin').value;
  const typedPin = document.getElementById('typed-numbers').value;
  const pinMatched = document.getElementById('pin-matched');
  const pinUnmatched = document.getElementById('pin-unmatched');
  if(generatedPin == typedPin){
    pinMatched.style.display = 'block';
    pinUnmatched.style.display = 'none';
    window.location.href = "banking.html";
  }
  else{
    pinUnmatched.style.display = 'block';
    pinMatched.style.display = 'none';
  }
}
