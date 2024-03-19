let userScore=0;
let compScore=0;
let mgs=document.querySelector("#mgs");
const userPara=document.querySelector("#user_Score");
const compPara=document.querySelector("#comp_Score");
const choices=document.querySelectorAll(".option");
const getCompChoice=()=>{
    const options=["rock","paper","Scissors"];
    const ran=Math.floor(Math.random()*3);
    return options[ran]
}

const drawgame=()=>{
    mgs.innerText="Game was Draw.Play Again";
    mgs.style.backgroundColor="brown";
}
const showWinner=(userWin)=>{
if(userWin){
    userScore++;
    userPara.innerText=userScore;
    mgs.innerText="You Win!";
    mgs.style.backgroundColor="green"; 
}
else{
    compScore++;
    compPara.innerText=compScore;
    mgs.innerText="You Lose."
    mgs.style.backgroundColor="red";
}
}
const playGame=(userId)=>{
    console.log("user Choice= ",userId);
    const compChoice=getCompChoice();
    console.log("Comp Choice=", compChoice);

    if(userId=== compChoice){
        drawgame();
    }
    else{
        let userWin=true;
        if(userId==="rock"){
        userWin=compChoice=== "paper" ? false : true;
     } else if(userId==="paper"){
        userWin = compChoice==="Scissors" ? false : true;
     }else{
        userWin=compChoice==="rock" ? false:  true
     }
     showWinner(userWin);
    }
}
choices.forEach((option) =>{
    console.log(option);
    option.addEventListener("click",()=>{
        const choiceId=option.getAttribute("id");
        playGame(choiceId)
    })
})

//-------------------------------
let modeBtn=document.querySelector("#mode");

let currMode='light';

modeBtn.addEventListener("click",()=>{
    if(currMode=='light'){
        currMode="Dark";
        // document.querySelector("body").style.backgroundColor="black";
        document.querySelector('body').classList.add('dark');
        document.querySelector('body').classList.remove('light');
        modeBtn.style.backgroundColor="black";
        modeBtn.style.color="white";
        modeBtn.innerText="Light mode";
    }else{
        currMode="light";
        // document.querySelector("body").style.backgroundColor="white";
        document.querySelector('body').classList.add('light');
        document.querySelector('body').classList.remove('dark');
        modeBtn.style.backgroundColor="white";
        modeBtn.style.color="black";
       
        modeBtn.innerText="Dark mode";
    }
    console.log(currMode);
})