var numbers = document.getElementsByClassName("number_button");
var result = document.getElementById("result_c")

addButtonListeners()
//converting the buttons into button listeners so that we can do calculations with them
function addButtonListeners() {
    for(let i = 0; i<numbers.length; i++){
        numbers[i].addEventListener("click", clicked);
    }
}

//once a button is clicked, this function runs
function clicked(e){
    let buttonValue =  e.target.innerHTML;
    console.log("button val:" + buttonValue);
    console.log("result:" + result.innerText);

    if(buttonValue === '=' && buttonValue!='C' && buttonValue!='CE'){
        try{
            result.innerText = eval(result.innerText).toString()
        }catch(error){
            //console.log(error);
            if(error.name === 'SyntaxError'){
                result.innerText = 'Error';
            }
        }
    }
    else if(result.innerText!=='0' && buttonValue!='C' && buttonValue!='CE'){
        result.innerText = result.innerText + buttonValue
    }
    else if(result.innerText === '0' && buttonValue!='C' && buttonValue!='CE'){
        result.innerText = buttonValue
    }else if(buttonValue === 'C'){
        result.innerText = '0';
    }else if(buttonValue ==='CE'){
        if (result.innerText.length !== 1) {
            result.innerText = result.innerText.slice(0, -1);    //slicing last digit off when clicking backspace (CE)
        }else{
            result.innerText = '0'
        }
    }else{
        result.innerText = 'error';
    }
}
function updateCalculatorDisplay(val){
    //getting the result and putting it inside the result variable

    result.innerText = result.innerText === '0' ? buttonValue : result.innerText+ buttonValue;
}
