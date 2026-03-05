const display = document.getElementById("display");

function appendValue(value){

    const operators = ['+','-','*','/'];
    let lastChar = display.value.slice(-1);

    if(operators.includes(value) && operators.includes(lastChar)){
        return; // agar oxiri ham amal bo'lsa yangi amal qo'shilmaydi
    }

    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{

        if(display.value.includes("/0")){
            display.value = "Error";
            return;
        }

        display.value = Function('"use strict";return (' + display.value + ')')();

    }catch{
        display.value = "Error";
    }
}

function squareRoot(){
    try{

        if(display.value === "") return;

        let num = Function('"use strict";return (' + display.value + ')')();

        if(num < 0){
            display.value = "Error";
            return;
        }

        display.value = Math.sqrt(num);

    }catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown",(e)=>{

    if(!isNaN(e.key) || ['+','-','*','/','.'].includes(e.key)){
        appendValue(e.key);
    }

    else if(e.key === "Enter"){
        calculate();
    }

    else if(e.key === "Backspace"){
        deleteLast();
    }

    else if(e.key === "Escape"){
        clearDisplay();
    }

    else if(e.key.toLowerCase() === "r"){
        squareRoot();
    }

});