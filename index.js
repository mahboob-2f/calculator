
const displayTab= document.querySelector("[data-display]");


let boxes= document.querySelectorAll("[box]");

//   adding event listener to all buttons
 
let currentValue="";
let firstValue ="";
let operator ="";

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        const value= box.innerHTML;
        
      

        if(value >= 0 && value <=9){
            currentValue+=parseInt(value); 
             
            updateDisplayValue(currentValue);
        }
        else if(value === 'CE' ){
            clearDisplay();
        }else if(value === "="){
            calculateResult();
        }else if(value ==="."){
            if(!currentValue.includes(".")){
                currentValue +=".";
                updateDisplayValue(currentValue);
            }
        }else{
            setOperator(value);
            updateDisplayValue(value);
             
        }
        // console.log(currentValue);
    })
});

function clearDisplay(){
    displayTab.innerHTML ="";
    currentValue="";
    operator ="";
}

function updateDisplayValue(value){
    displayTab.innerHTML = value;
}

function setOperator(op){
    if(currentValue ==="" ) return;
    firstValue = currentValue;
    operator = op === "x" ? "*" : op;
    currentValue ="";


}

function calculateResult(){
    if(firstValue ==="" ||  currentValue ==="") return;
    let  a = parseInt(firstValue);
    let b = parseInt(currentValue);
    let ans;
    if(operator === "+"){
          ans = a+b;
        updateDisplayValue(ans);

    }else if(operator === "-"){
          ans = a-b;
        updateDisplayValue(ans);
    }
    else if(operator === "%"){
          ans = a%b;
        updateDisplayValue(ans);
    }
     else if(operator === "*"){
          ans = a*b;
        updateDisplayValue(ans);
    
    }else if(operator === "/"){
          ans = a/b;
        updateDisplayValue(ans);
    }
    currentValue = ans.toString();
    firstValue ="";
    operator ="";


}