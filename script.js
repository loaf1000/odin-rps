function capitalizeWord(letters) {
    let lowercase = letters.toLowerCase();
    let firstLetter = lowercase.charAt(0);
    return lowercase.replace(firstLetter, firstLetter.toUpperCase())

}

function getPlayerChoice() {
    const key = ["rock", "paper", "scissors"];
    const maxTries = 5;
    let playerChoice = prompt("Choose rock, paper, or scissors");

    for (let i = 1; i < maxTries - 1; i++)
    {
        if (key.indexOf(playerChoice.toLowerCase()) > -1){
            return playerChoice;
        }
        else {
            playerChoice = prompt("Oops try again! Pick rock, paper, or scissors")
        }
    }
    playerChoice = prompt("Last chance to choose rock paper or scissors... Defaults to rock")
    return (key.indexOf(playerChoice) > -1) ? playerChoice : "rock";
}

function getComputerChoice() {
  const key = ["rock", "paper", "scissors"];
  return key[Math.floor(Math.random() * 3)];
}

function playRound (playerChoice, computerChoice) {

    let pChoice = playerChoice.toLowerCase();
    
    if (pChoice == computerChoice) {
        return "Draw! You both picked " + capitalizeWord(computerChoice);
    }
    else if ((pChoice == "rock" && computerChoice == "scissors") || (pChoice == "paper" && computerChoice == "rock") || (pChoice == "scissors" && computerChoice == "paper")) {
        return "You Win! " + capitalizeWord(pChoice) + " beats " + capitalizeWord(computerChoice);
    }
    else
    {
        return "You Lose! " + capitalizeWord(computerChoice) + " beats " + capitalizeWord(pChoice);
    }
}

function playGame() {

    let wins = 0;
    let losses = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++)
    {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let message = playRound(playerChoice, computerChoice)
        if (message.indexOf("You Win!") > -1) {
            wins++;
        }
        else if (message.indexOf("You Lose!") > -1) {
            losses++;
        }
        else {
            draws++;
        }
        console.log(message);
    }
    if (wins > losses) {
        console.log("You win the game " + wins + " to " + losses);
    }
    else if (losses > wins) {
        console.log("You lose the game " + wins + " to " + losses);
    }
    else {
        console.log("Tie game! " + draws + " draws!");
    }
}

//playGame();