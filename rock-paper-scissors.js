let scoreCounter = 0;

const getComputerChoice = () => {
    const choices = ['rock', 'paper','scissors'];
    let getChoice = Math.floor(Math.random() * 3);
    return choices[getChoice];
}

const playRPS = (playerSelection,computerSelection) =>{
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        alert(`It is a Draw, you both chose ${playerSelection.toLowerCase()}!`);
    }
    else if((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') || (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') || (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper')){
        scoreCounter ++;
        alert(`You won, ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}!`);
        
    }
    else{
        alert(`You lose, ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}!`);
    }
}

const game = () =>{
    for(i = 0; i<5; i++){
        let choiceCheck = true;
        let playerChoice = prompt("Rock, Paper, or Scissors?");

        while(choiceCheck){

        if(playerChoice.toLowerCase() === 'rock' || playerChoice.toLowerCase() === 'paper' || playerChoice.toLowerCase() === 'scissors'){
            let computerChoice = getComputerChoice();
            playRPS(playerChoice, computerChoice);
            choiceCheck = false;
        }
        else{
            playerChoice = prompt("Invalid entry, please only select between Rock, Paper, or Scissors!");
            }

        }
    }

    if(scoreCounter >= 3){
        alert(`Congratulations, you won with a score of ${scoreCounter} out of 5`);
    }
    else{
        alert(`You lose, you scored ${scoreCounter} out of 5`); 
    }

}

game();