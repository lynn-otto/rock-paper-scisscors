/*We work with 0,1 and 2 instead of "Rock", "Paper" and "Scissors".
The array below let's us convert between those two */

const arrayRockPaperScissors = ["Rock", "Paper", "Scissors"];

function askForNumber(messageToPlayer) {
    playerInput = Number(prompt(messageToPlayer));

    /*Every number * 0 is 0 except for infinity and NaN. We therefore prohibit these cases 
    We also don't want that 0 or less victories are required*/
    let incorrectNumber = (playerInput*0 !== 0 || playerInput <= 0);
    while (incorrectNumber) {
        console.log("Please enter a positive number!");
        playerInput = Number(prompt(messageToPlayer));
        incorrectNumber = (playerInput*0 !== 0 || playerInput <= 0);
    }
    return playerInput;
}

function generateRandomIntegerInbetweenInclusive(lowerBound, upperBound) {
    return Math.floor(Math.random()* (upperBound - lowerBound + 1)) + lowerBound;
}

function computerSelects() {
    let computerSelection = generateRandomIntegerInbetweenInclusive(0,2);
    return computerSelection;
}

/*This returns -1 if neither of "Rock", "Paper" and "Scissors" was given as input.
Otherwise it returns the integer corresponding to the element in the array at the top. */
function playerSelects(playerInput) {
    let choice = -1;
    for (let i = 0; i < arrayRockPaperScissors.length; i++) {
        if (caseInsensitiveStringComparison(playerInput, arrayRockPaperScissors[i])) {
            choice = i;
        }
    }
    return choice;
}

/* Return 0: Draw; Return 1: Computer wins!; Return 2: Player wins */
function checkForWinner(playerSelection, computerSelection, playerName) {
    const outputString = document.querySelector('.output');
    let winner;
    let difference = playerSelection - computerSelection;
    if (difference === 0) {
        winner = 0;
        outputString.textContent = `Draw! Both have chosen ${arrayRockPaperScissors[playerSelection]}.`;
    }
    else if (difference === -1 || difference === 2){
        winner = 1;
        outputString.textContent = `The computer wins this round! ${arrayRockPaperScissors[computerSelection]} beats ${arrayRockPaperScissors[playerSelection]}.`;
    }
    else {
        winner = 2;
        outputString.textContent = `${playerName} wins this round! ${arrayRockPaperScissors[playerSelection]} beats ${arrayRockPaperScissors[computerSelection]}`;
    }
    return winner;
}
let playerScore = 0;
let computerScore = 0;
let gameRunning = true;
function increaseScoreboard(result) {
    if (result ==1) {
        computerScore = computerScore + 1;
        const scoreboard = document.querySelector('#computerScore');
        scoreboard.textContent = `Computer Score: ${computerScore}`;
    }
    if (result ==2) {
        playerScore = playerScore + 1;
        const scoreboard = document.querySelector('#playerScore');
        scoreboard.textContent = `Player Score: ${playerScore}`;
    }
}

function playRound(playerSelection) {
    let computerSelection = computerSelects();
    let result = checkForWinner(playerSelection, computerSelection, "Player");
    return result; 
}

function buttonLogic(e) {
    if (gameRunning) {
        if (e.target.textContent === "Rock") {
            increaseScoreboard(playRound(0));
            checkForEnd(3);
        }
        if (e.target.textContent === "Paper") {
            increaseScoreboard(playRound(1));
            checkForEnd(3);
    
        }
        if (e.target.textContent === "Scissors") {
            increaseScoreboard(playRound(2));    
            checkForEnd(3);
        }
    }

}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', buttonLogic));

function checkForEnd(numberOfVictories) {
    if (playerScore ==numberOfVictories) {
        const gameResult = document.querySelector('.gameRunning');
        gameResult.textContent = "The game has ended. The winner is Player."
        gameRunning = false;
    }
    if (computerScore ==numberOfVictories) {
        const gameResult = document.querySelector('.gameRunning');
        gameResult.textContent = "The game has ended. The winner is Computer."
        gameRunning = false;
    }
}


/*Main
let playerName = prompt("What is your name?");
let numberOfVictories = askForNumber("How many victory rounds to win?");
playGameAgainstComputer(numberOfVictories,playerName);*/