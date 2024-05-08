const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const scissors = document.querySelector(".Scissors");
const scoreBoard = document.querySelector(".Scoreboard");
const announcer = scoreBoard.querySelector(".Announcer");
const winScore = scoreBoard.querySelector(".Wins");
const lossScore = scoreBoard.querySelector(".Losses")
const drawScore = scoreBoard.querySelector(".Draws")




function getWins(score) {
    return Math.floor(score / 100);
}

function getLosses(score) {
    return Math.floor((score % 100) / 10);
}

function getDraws(score) {
    return score % 10;
}

function updateScoreBoard(score) {
    wins = getWins(score);
    losses = getLosses(score);
    draws = getDraws(score);

    winScore.textContent = "Wins: " + wins;
    lossScore.textContent = "Losses: " + losses;
    drawScore.textContent = "Draws: " + draws;
}

function isGameOver(score) {
    wins = getWins(score);
    losses = getLosses(score);
    if (wins < 5 && losses < 5)
    {
        return false;
    }
    else
    {
        return true;
    }
}



function endGame(score){
   let buttons = document.querySelectorAll("button");
   let wins = getWins(score);
   let losses = getLosses(score);
   let draws = getDraws(score);

   buttons.forEach((button) => {
    button.style.display = "none";
   })

   if (wins > losses) {
        announcer.textContent = "You win the game " + wins + " to " + losses;
    }
    else if (losses > wins) {
        announcer.textContent = "You lose the game " + wins + " to " + losses;
    }
    else {
        announcer.textContent = "Tie game! " + draws + " draws!";
}

}


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
       announcer.textContent = "Draw! You both picked " + capitalizeWord(computerChoice); 
       return 1;
    }
    else if ((pChoice == "rock" && computerChoice == "scissors") || (pChoice == "paper" && computerChoice == "rock") || (pChoice == "scissors" && computerChoice == "paper")) {
        announcer.textContent =  "You Win! " + capitalizeWord(pChoice) + " beats " + capitalizeWord(computerChoice);
        return 100;
    }
    else
    {
        announcer.textContent =  "You Lose! " + capitalizeWord(computerChoice) + " beats " + capitalizeWord(pChoice);
        return 10;
    }
}

function playGame() {

    //0-- wins, -0- losses, --0 draw
    let score = 0;

    announcer.textContent = "Welcome to RPS!"

    rock.addEventListener("click", () => {
    score += playRound("rock", getComputerChoice());
    updateScoreBoard(score);
    if (isGameOver(score)) {
        endGame(score);
    }
    });

    paper.addEventListener("click", () => {
    score += playRound("paper", getComputerChoice());
    updateScoreBoard(score);
    if (isGameOver(score)) {
        endGame(score);
    }
    });

    scissors.addEventListener("click", () => {
    score += playRound("scissors", getComputerChoice());
    updateScoreBoard(score);
    if (isGameOver(score)) {
        endGame(score);
    }
    });
}



playGame();