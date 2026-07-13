const display = document.getElementById("display");

// Number / Operator Add
function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

// AC
function clearDisplay() {
    display.value = "";
}

// Backspace
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate
function calculate() {

    if (display.value.trim() === "") {
        return;
    }

    try {

        let expression = display.value;

        // Percentage Support
        expression = expression.replace(/%/g, "/100");

        let result = eval(expression);

        if (!isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;

    } catch (e) {
        display.value = "Error";
    }

}