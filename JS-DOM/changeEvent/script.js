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

// ✅ Change event listeners
inputAmount.addEventListener("change", updateDisplay);
currencySelector.addEventListener("change", updateDisplay);