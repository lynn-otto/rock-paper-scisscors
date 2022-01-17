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

}


let playerChoice = "Scissors";
playerChoice = playerSelects(playerChoice);
console.log(`Player chose ${playerChoice}, i.e. ${arrayRockPaperScissors[playerChoice]}.` );
let computerChoice = computerSelects();
console.log(`Computer chose ${computerChoice}, i.e. ${arrayRockPaperScissors[computerChoice]}.`)
let playerName = "Lynn";
checkForWinner(playerChoice, computerChoice, playerName);