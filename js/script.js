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
    try{

        let expression = display.value
        if(!expression) return;
          
        //Handle Brackets 
        while(expression.includes('(')){
            expression = expression.replace(/\(([^()]+)\)/g,(math, subExpr) => {
                return parseBOMDAS(subExpr)
            });
        }

        //calculate the final remaing BOMDAS expression
        let result = parseBOMDAS(expression);

        if(result == Infinity || isNaN(result)){
            display.value = "Math Error"
        }else{
            display.value = result
        }


    }catch(error){
        display.value = "Math Error"
    }
}