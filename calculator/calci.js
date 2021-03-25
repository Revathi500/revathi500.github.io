let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is ',buttonText);
        
        if(buttonText=='x'){
            buttonText='*';
            screenValue += buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='÷')
        {
            buttonText='/';
            screenValue += buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='−')
        {
            buttonText='-';
            screenValue += buttonText;
            screen.value=screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
       else if(buttonText == '='){
          console.log(screenValue);
          console.log(eval(screenValue));
          if(Number.isInteger(eval(screenValue))){
            console.log('line 35');
            screen.value = eval(screenValue);
          }else {
            screen.value = parseFloat(eval(screenValue)).toFixed(3);
          }            
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
    }
    })
}
