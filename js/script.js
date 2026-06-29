const display = document.getElementById('display');

//calculate operations
function appendValue(num) {
    display.value += num;
}

//clear function
function clearDisplay() { 
    display.value = '';
}

//calculate function
function calculateTotal() {
    try{
        if(display.value){
            display.value = eval(display.value)
        }
    }catch(error){
        display.value = "Math Error"
    }
}