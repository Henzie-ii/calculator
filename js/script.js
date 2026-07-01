const display = document.getElementById('displayFigures');


function appendValue(num) {
    display.value += num;
}

//clear function
function clearDisplay() { 
    display.value = '';
}

//calculate function
function calculateTotal() {
    try {
        if (!display.value) return;

        //This Force BOMDAS by splitting the math values by the division operator
        let steps = display.value.split('/').map(piece => eval(piece));
        
        let finalResult = eval(steps.join('/'));

        display.value = (finalResult === Infinity || isNaN(finalResult)) ? "Math Error" : finalResult;
    } catch (error) {
        display.value = "Math Error";
    }
}