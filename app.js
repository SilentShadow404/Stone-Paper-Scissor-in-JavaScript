let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })

})

const compChoice=()=>{
    const options=["rock", "paper", "scissor"];
    const randomID=Math.floor(Math.random()*3);
    return options[randomID];
}

const playGame=(userChoice)=>{
    const compchoice=compChoice();
    if(userChoice===compchoice){
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice==="rock"){
            userWin=compchoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compchoice==="rock"?true:false;
        }
        else if(userChoice==="scissor"){
            userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compchoice);
    }

}

const drawGame=()=>{
    msg.innerText="Game has Drawn";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}