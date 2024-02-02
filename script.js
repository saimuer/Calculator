function display(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    var resultValue = document.getElementById('result').value;
    try {
        var result = eval(resultValue);
        document.getElementById('result').value = result;
    }
    catch(error) {
        document.getElementById('result').value = 'Error';
    }
}