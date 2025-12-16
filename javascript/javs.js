let display= document.querySelector("#display")

function insert(value){
    if(display.value === "0") {
        display.value=value
    }
    display.value +=value;
}

let num1;
let operator;

function mul(){
    if(display.value === ""){
        return;
    }
    num1=Number(display.value);
    operator="*";
   display.value = "";
}

function add(){
     if(display.value === ""){
        return;
    }
    num1=Number(display.value);
    operator="+";
    display.value = "";
}
function sub(){
     if(display.value === ""){
        return;
    }
    num1=Number(display.value);
    operator="-";
    display.value = "";
}
function divide(){
     if(display.value === ""){
        return;
    }
    num1=Number(display.value);
    operator="/";
    display.value = "";
}

function sqr(){
     display.value = Number(display.value)**2;
  
    
}
function cube(){
     display.value = Number(display.value)**3;
}

function calculate(){
    if(operator === null){
        return;
    }
    let num2 = Number(display.value);
    let result;
    if(operator==="*"){
        result= num1*num2;

    }
    if(operator === "+"){
        result=num1+num2;
    }
     if(operator === "-"){
        result=num1-num2;
    }
     if(operator === "/"){
        result=num1/num2;
    }
     
    display.value=result;
    num1=null;
    operator=null;
}


function del(){
    display.value = display.value.toString().slice(0,-1);
    if(display.value === ""){
        display.value = "0";
    }
}

function allclear(){
    display.value = "";
}






