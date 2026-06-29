const display = document.getElementById('display');

function appendValue(num) {
    display.value += num;
}

function clearDisplay() { 
    display.value = '';
}

function calculateTotal() {
    try{
        if(display.value){
            display.value = eval(display.value)
        }
    }catch(error){
        display.value = "Math Error"
    }
}