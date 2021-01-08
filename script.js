var records=[];
document.getElementById("number-submit").addEventListener("click",playGame);
document.getElementById("restart-game").addEventListener("click",initGame);
var correctNumber=Math.floor(Math.random()*100+1);

function displayResult(status){
return document.getElementById("result").className+="alert alert-"+status;
} 

function playGame(){
     var userInput=document.getElementById("number-guess").value;
    if(userInput>correctNumber){
        document.getElementById("result").innerHTML="Guess is too High";
        displayResult("warning");
        record(userInput);
    }else if(userInput<correctNumber){
        document.getElementById("result").innerHTML="Guess is too Low";
        displayResult("warning");
        record(userInput);
    }else{
        document.getElementById("result").innerHTML="Guess is Correct";
        displayResult("success");
    }
    };

function record(enteredValue){
 records.push(enteredValue);
let list="<ul class=list-group>";
for(i=0;i<records.length;i++){
   list+= "<li class=list-group-item>You Guessed "+records[i]+"</li>";
}
list+="</ul>";
document.getElementById("history").innerHTML=list;
}

function initGame(){
// correctNumber=Math.floor(Math.random()*100+1);
// records=[];
// document.getElementById("result").innerHTML="";
// document.getElementById("history").innerHTML="";
// displayResult(false);
location.reload();  // instead of the above, we can also use this method.
}
