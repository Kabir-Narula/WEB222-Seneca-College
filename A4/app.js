document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById("number-display");
  const numberButtons = document.querySelectorAll(".number-btn, .operator-btn, #opening-bracket-btn, #closing-bracket-btn, #percentage-btn, #decimal-btn");
  const clearButton = document.getElementById("clear-btn");
  const totalButton = document.getElementById("total-btn");

  numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      display.innerText += button.innerText;
    });
  });

  clearButton.addEventListener("click", function() {
    display.innerText = "";
  });

  totalButton.addEventListener("click", function() {
    try {
      let expression = display.innerText;
      // Reset AC: reset the result to 0
      if (expression.includes("AC")) {
        expression = expression.replace(/AC/g, "0");
      }
      // %: divide 100
      expression = expression.replace(/%/g, "/100");
      // Division symbol (÷) in HTML: &divide;
      expression = expression.replace(/÷/g, "/");
      const result = eval(expression);
      display.innerText = result;
    } catch (error) {
      display.innerText = "Error";
    }
  });
});
