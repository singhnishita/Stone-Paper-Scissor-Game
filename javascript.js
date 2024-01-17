let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score");
const computerscorepara= document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options [randIdx];
}

const drawgame =() =>{
    console.log("DRAW");
    msg.innerText="game is DRAW";
    msg.style.backgroundColor = "blue";
    msg.style.color="white";
}
const showwinner =(userwin ,userchoice ,computerChoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText= userScore;
        console.log("you win!");
        msg.innerText=`You win! Your ${userchoice} Beats computer ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerscorepara.innerText=computerScore;
        console.log("you lose#");
        msg.innerText=`You lost# computer ${computerChoice} Beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame=(userchoice)=>{
   console.log("user choice = " , userchoice); 
   const computerChoice = genCompChoice();
   console.log("comp choice = ", computerChoice);
   
   if (userchoice ===computerChoice){
    drawgame();
   }else{
    let userwin = true;
    if (userchoice ==="rock"){
        userwin = computerChoice==="paper"?false:true;
    }else if (userchoice ==="paper"){
        userwin= computerChoice==="scissors"?false:true;
    }else{
        userwin= computerChoice==="rock"?false:true;
    }
    showwinner (userwin , userchoice , computerChoice);

   }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userchoice=choice.getAttribute("id")  
      playGame(userchoice);      
});

});
