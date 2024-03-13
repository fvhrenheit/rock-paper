function getComputerChoice() {
 let choice = Math.floor(Math.random() * 3) + 1;
if (choice <= 1){
    choice = "rock";
}
else if (choice <= 2){
    choice = "paper";
}
else{
    choice = "scissors"
}
    return choice;
};

function playRound(playerSelection, computerSelection) {
 
    ps = playerSelection;
    cs = computerSelection;

    if(ps===cs){
        return "It's a draw...";
    }
    if (ps==="scissors"){
        if (cs==="paper"){
        return "You win the round";
        }
        else if (cs==="rock"){
            return "You loose the round";
        }
        
    }
    else if (ps==="paper"){
        if (cs==="scissors"){
        return "You loose the round";
        }
        else if(cs==="rock"){
        return "You win the round";
        }
        
    }
    else if (ps==="rock"){
        if (cs==="paper"){
        return "You loose the round";
        }
        else if(cs==="scissors"){
            return "You win the round";
        }
        
    }
};


let playerScore = 0;
let computerScore = 0;



const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        playerSelection = button.className;
        const computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        document.querySelector(".cs").innerHTML = (computerSelection);
        document.querySelector(".round").innerHTML = (roundResult);
        
        if (roundResult.includes("win")){
            playerScore++;
        }
        else if (roundResult.includes("loose")){
            computerScore++;
        }
        
        document.querySelector(".ptotal").innerHTML = (playerScore);
        document.querySelector(".ctotal").innerHTML = (computerScore);
        endGame();
    });
});

function endGame(){
    if(playerScore == 5){
        document.querySelector(".winner").innerHTML = ("You won the game!");
    }
    else if(computerScore == 5){
        document.querySelector(".winner").innerHTML = ("You have lost the game!");
    }
}
        
        


        








