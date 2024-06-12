const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function ClearDisplay(){
    display.value = "";
}

function CalculateDisplay(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}