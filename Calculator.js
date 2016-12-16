let currentTotal = 0;
let currentInput = 0;
let currentOperation = '';

function addToInput(inp) {
    if ( currentInput === 0 ) {
      currentInput = currentInput + inp;
    } else {
      currentInput = currentInput.toString() + inp.toString();
    }
    document.getElementById('currentDisplay').value=currentInput;
}

function addOperation(inp2) {
  if (currentOperation !='') {
    equate();
    currentInput = currentTotal;
  }

  currentTotal = currentInput;
  currentInput = 0;
  currentOperation = inp2;
  document.getElementById('currentDisplay').value=currentInput;

}

function equate(){
  switch (currentOperation){
    case "+":
      currentTotal = parseInt(currentTotal) + parseInt(currentInput);
      break;
    case "-":
      currentTotal = currentTotal - currentInput;
      break;
    case "*":
      currentTotal = currentTotal * currentInput;
      break;
    case "/":
      if (currentTotal == 0){
        currentTotal = 0;
      } else {
        currentTotal = currentTotal / currentInput;
      }
      break;
  }
  currentOperation ='';
  document.getElementById('currentDisplay').value=currentTotal;

}

function clear1() {
  currentTotal = 0;
  currentInput = 0;
  currentOperation = '';
  document.getElementById('currentDisplay').value=currentInput;

}
