/*We work with 0,1 and 2 instead of "Rock", "Paper" and "Scissors".
The array below let's us convert between those two */

const arrayRockPaperScissors = ["Rock", "Paper", "Scisscors"];

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
            let choice = i;
        }
    }
    return choice;
}



console.log(playerSelects("hi"));