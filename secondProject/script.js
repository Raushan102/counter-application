let decreaseButton = document.getElementById("decreaseButton");
let increaseButton = document.getElementById("increaseButton");
let outputBox = document.getElementById("outputBox");
let resetButton = document.getElementById("resetButton");

console.log(decreaseButton.innerText);
console.log(increaseButton.innerText);
console.log(resetButton.innerText);
console.log(outputBox.innerText);

let sum=0;

function increase1(decrease1=0){
    if(sum>=20){
        jumpout;

    }
    else{
    sum=sum+1;
    outputBox.innerText=sum;
    return sum;
    }
    
}

function decrease1(increase1=0){
    if(sum<=0)
    {
      jumpout;
    }
    else{

    sum=sum-1;
    outputBox.innerText=sum;
    return sum;
    }

}
 function reset(){
    sum=sum*0;
    outputBox.innerText=sum;
 }

 decreaseButton.addEventListener("click",decrease1);
 increaseButton.addEventListener("click",increase1);
 resetButton.addEventListener("click",reset);
