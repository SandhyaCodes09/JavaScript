const inputAmount = document.querySelector("#inr-amount");
const currencySelector = document.querySelector("#currency-select");
const display = document.querySelector(".currency-display");

function convertCurrency(valueInRupee, convertTo = "USD") {
  switch (convertTo) {
    case "USD": {
      return valueInRupee * 85;
    }
    case "EUR": {
      return valueInRupee * 95;
    }
    case "GBP": {
      return valueInRupee * 105;
    }
    default: {
      return valueInRupee;
    }
  }
}

function updateDisplay() {
  const valueInRupee = inputAmount.value;
  const convertedAmount = convertCurrency(valueInRupee, currencySelector.value);
  display.innerText = convertedAmount;
}

// Modify the 'change' event to 'keyup' to ensure the computation and display are updated on every key press.
inputAmount.addEventListener("keyup", updateDisplay);
currencySelector.addEventListener("change", updateDisplay);
