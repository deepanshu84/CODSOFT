let currentInput = "";
let previousInput = "";
let operation = "";

function appendNumber(number) {
    currentInput += number;
    document.getElementById("display").value = currentInput;
}

function chooseOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = "";
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operation = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    if (currentInput === "" || previousInput === "") return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                result = "Error";
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = "";
    previousInput = "";
    document.getElementById("display").value = currentInput;
}
