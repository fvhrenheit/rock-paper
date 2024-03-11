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
}

function playRound(playerSelection, computerSelection) {
    ps = playerSelection;
    cs = computerSelection;

    if(ps===cs){
        return "draw";
    }
    if (ps==="scissors"){
        if (cs==="paper"){
        return "You win";
        }
        else if (cs==="rock"){
            return "You loose";
        }
        
    }
    else if (ps==="paper"){
        if (cs==="scissors"){
        return "You loose";
        }
        else if(cs==="rock"){
        return "You win";
        }
        
    }
    else if (ps==="rock"){
        if (cs==="paper"){
        return "You loose";
        }
        else if(cs==="scissors"){
            return "You win";
        }
        
    }
}

function playGame(){
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt(`rpc:`);
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes('win')){
            playerScore++;
        }
        else if (roundResult.includes(`loose`)){
            computerScore++;
        }
    }
    console.log(`Player Total Score ${playerScore}`);
    console.log(`Computer Total Score ${computerScore}`);
    if (playerScore > computerScore) {
        console.log('you win the game')
    }
    else if(computerScore > playerScore){
        console.log('you loose the game')
    }
    else{
        console.log("it's a tie")
    }
}
