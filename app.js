let userScore=0;
let cmpScore=0;
let select=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const option =["rock","paper","scissor"];
    const ranIdx=Math.floor(Math.random()*3);
    return option[ranIdx];
}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win")
    }
    else{
        console.log("computer win");
    }
}
const drawGame=()=>{
    console.log("Game was draw");
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
        showWinner(userWin);
    }
}
select.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userID=choice.getAttribute("id")
      playGame(userID);
    });
});