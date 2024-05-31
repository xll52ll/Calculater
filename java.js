const display = document.getElementById("display");

function todisplay(input){
    display.value += input;
}

function cleardis(){
    display.value = " ";
}

function Cal(){
    try{
        display.value = eval(display.value);
    } catch(error) {
        display.value = "error";
    }
}
