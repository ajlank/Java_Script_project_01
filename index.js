var form=document.querySelector("form");
var cardBody=document.querySelector(".card-body");
var guessingNumber=form.querySelector("#guessingNumber");
var checkBtn=document.querySelector("#check");
var resultText=document.querySelector(".resultText");
var remainingAttempts=document.querySelector(".remainingAttempts");
var winlostMsg=document.createElement("p");
var totalAttempts=5;
var attempts=0;
var totalWins=0;
var totalLosts=0;
form.addEventListener("submit",function(event){
    event.preventDefault();
    attempts++;
    if(attempts>5){
        guessingNumber.disabled=true;
        checkBtn.disabled=true;
    }else{
        let number=Number(guessingNumber.value);
        checkresult(number);
        remainingAttempts.innerHTML=`Your remaining attempts : ${totalAttempts-attempts}`;
    }
})
function checkresult(value){
 var ranDom=getrandomNumber(5);

 if(ranDom===guessingNumber){
     resultText.innerHTML="You have won";
     totalWins++;
 }else{
     resultText.innerHTML=`You have lost.Your random number was ${ranDom}`;
     totalLosts++;
 }
 winlostMsg.innerHTML=`Won : ${totalWins},lost : ${totalLosts}`;
 cardBody.appendChild(winlostMsg);
}

function getrandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}