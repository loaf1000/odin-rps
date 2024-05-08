const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const scissors = document.querySelector(".Scissors");
const scoreBoard = document.querySelector(".Scoreboard");

rock.addEventListener("click", () => {
    message = playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    message = playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
   message = playRound("scissors", getComputerChoice());
});




function capitalizeWord(letters) {
    let lowercase = letters.toLowerCase();
    let firstLetter = lowercase.charAt(0);
    return lowercase.replace(firstLetter, firstLetter.toUpperCase())

}

function getComputerChoice() {
  const key = ["rock", "paper", "scissors"];
  return key[Math.floor(Math.random() * 3)];
}

function playRound (playerChoice, computerChoice) {

    let pChoice = playerChoice.toLowerCase();
    
    if (pChoice == computerChoice) {
       "Draw! You both picked " + capitalizeWord(computerChoice); 
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
    let message;





    /*while (wins < 5 && losses < 5)
    {


        if (message.indexOf("You Win!") > -1) {
            wins++;
        }
        else if (message.indexOf("You Lose!") > -1) {
            losses++;
        }
        else {
            draws++;
        }

    }
    if (wins > losses) {
        console.log("You win the game " + wins + " to " + losses);
    }
    else if (losses > wins) {
        console.log("You lose the game " + wins + " to " + losses);
    }
    else {
        console.log("Tie game! " + draws + " draws!");
    }*/
}



playGame();