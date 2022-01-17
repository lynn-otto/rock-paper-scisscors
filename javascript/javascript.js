/*We work with 0,1 and 2 instead of "Rock", "Paper" and "Scissors".
The array below let's us convert between those two */

const arrayRockPaperScissors = ["Rock", "Paper", "Scissors"];

function generateRandomIntegerInbetweenInclusive(lowerBound, upperBound) {
    return Math.floor(Math.random()* (upperBound - lowerBound + 1)) + lowerBound;
}

function computerSelects() {
    let computerSelection = generateRandomIntegerInbetweenInclusive(0,2);
    return computerSelection;
}



function caseInsensitiveStringComparison (string1, string2) {
    string1UpperCase = string1.toUpperCase();
    string2UpperCase = string2.toUpperCase();
    if (string1UpperCase == string2UpperCase) {
        return true;
    }
    return false;
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
    let winner;
    let difference = playerSelection - computerSelection;
    if (difference === 0) {
        winner = 0;
        console.log(`Draw! Both have chosen ${arrayRockPaperScissors[playerSelection]}.`);
    }
    else if (difference === -1 || difference === 2){
        winner = 1;
        console.log(`The computer wins! ${arrayRockPaperScissors[computerSelection]} beats ${arrayRockPaperScissors[playerSelection]}.`);
    }
    else {
        winner = 2;
        console.log(`${playerName} wins! ${arrayRockPaperScissors[playerSelection]} beats ${arrayRockPaperScissors[computerSelection]}`);
    }
    return winner;
}

function playGameAgainstComputer(numberOfVictories, playerName) {
    gameRunning = true;
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;
    while (gameRunning) {
        console.log(`This is round ${roundNumber}.`)
        
        let playerSelection = -1;
        while(playerSelection < 0) {
            playerInput = prompt("Choose either \"Rock\", \"Paper\" or \"Scissors\".");
            playerSelection = playerSelects(playerInput);
        }

        let computerSelection = computerSelects();

        let result = checkForWinner(playerSelection, computerSelection, playerName);

        if (result === 1) {
            computerScore++;
        }
        if (result === 2) {
            playerScore++;
        }
        console.log(`${playerName} Score: ${playerScore}\; Computer Score: ${computerScore}`)
        roundNumber++;


        if(playerScore === numberOfVictories) {
            console.log(`The winner is ${playerName}!`)
            gameRunning = false;
        }

        if (computerScore === numberOfVictories) {
            console.log(`The winner is the computer!`)
            gameRunning = false;
        }
    }
    console.log("The game ends now.")
}

let playerName = prompt("What is your name?");
let numberOfVictories = Number(prompt("How many victory rounds to win?"));
playGameAgainstComputer(numberOfVictories,playerName);