let inpt=document.querySelector(".screen");
let btn=document.querySelectorAll("button");
let CurrentN=0;
let PreviousN=0;
let operator;
btn.forEach(button=>{
    button.addEventListener("click",()=>{
        let value=button.innerHTML;
        if(isNaN(value)){
            let lastChar = CurrentN.slice(-1); // Get the last character
            if(!isNaN(lastChar) || value=='⇚' || value=='CE')
            handleOper(value);
        }
        else{
         handleNum(value);
             }
            
    });
});
function handleNum(value){
    if (CurrentN === 0) {
        CurrentN = value;
      } else {
        CurrentN += value;
      }

      updateScreen(CurrentN);
}
function updateScreen(value) {
    inpt.innerHTML = value;
  }
function handleOper(value){
    switch(value){
        case 'CE':
            resetCalculator();
            break;
        case '⇚':
            if(CurrentN.length===1){
                resetCalculator();
                }
                else
                CurrentN=CurrentN.slice(0, -1);
            break;    
        case 'x':
            if(PreviousN==null){
                PreviousN=CurrentN;
                CurrentN+=value;
                
            }else{
            CurrentN+=value;
            }
            
            break; 
        case '+':
            CurrentN+=value;
            break;
            
        case '-':
            CurrentN+=value;
            break;
        case '÷':
            CurrentN+=value;
            break;
        case '.':
            
        if (!
            CurrentN.includes(".")) {
            
                CurrentN += value;
          }

            break;
        case '=':
            
        try {
            CurrentN = eval(CurrentN.replace("x", "*").replace("÷", "/")).toString();
          } catch (e) {
            CurrentN = "Error";
          }

            break;
            
    
    }
    
    updateScreen(CurrentN);
    

}

function resetCalculator() {
    CurrentN = 0;
    PreviousN = null;
    operator = null;
    updateScreen(CurrentN);
  }
