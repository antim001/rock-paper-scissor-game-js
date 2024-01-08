let userScore=0;
let cmpScore=0;
let select=document.querySelectorAll(".choice");
let name=prompt("Enter your name");
let setName=document.querySelector("#name");
setName.innerText=name;
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const cmpScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const option =["rock","paper","scissor"];
    const ranIdx=Math.floor(Math.random()*3);
    return option[ranIdx];
}
const showWinner=(userWin,userID,compChoice)=>{
    if(userWin){
        userScore++
        msg.innerText=`You win! ${userID} beats ${compChoice}`
        msg.style.backgroundColor='green';
        userScorePara.innerText=userScore
    }
    else{
      cmpScore++
        msg.innerText=` You lost! ${compChoice} beats ${userID}`
        msg.style.backgroundColor='red';
        cmpScorePara.innerText=cmpScore;
    }
}
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw! play again"
    msg.style.backgroundColor='#081b31';
}
const playGame=(userID)=>{
    console.log("User choice",userID);
    const compChoice=genCompChoice();
    console.log("computer choice",compChoice);
    if(userID===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userID=='rock'){
            userWin=compChoice==='paper'?false:true;
        }
        else if(userID=="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else if(userID=="scissor"){
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userID,compChoice);
    }
}
select.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userID=choice.getAttribute("id")
      playGame(userID);
    });
});