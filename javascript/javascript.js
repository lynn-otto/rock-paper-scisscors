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
    let messageCounter = generateRandomIntegerInbetweenInclusive(0,8);
    const computerMessage = document.querySelector('.message');
    if (difference === 0) {
        winner = 0;
        computerMessageChosen = messagesComputerDraw[messageCounter];
        computerMessage.textContent = `Computer: "${computerMessageChosen}"`;
        outputString.textContent = `Draw! Both have chosen ${arrayRockPaperScissors[playerSelection]}.`;
    }
    else if (difference === -1 || difference === 2){
        computerMessageChosen = messagesComputerWon[messageCounter];
        computerMessage.textContent = `Computer: "${computerMessageChosen}"`;
        winner = 1;
        outputString.textContent = `The computer wins this round! ${arrayRockPaperScissors[computerSelection]} beats ${arrayRockPaperScissors[playerSelection]}.`;
    }
    else {
        computerMessageChosen = messagesComputerLost[messageCounter];
        computerMessage.textContent = `Computer: "${computerMessageChosen}"`;
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

function reset() {
    computerScore = 0;
    playerScore = 0;
    const scoreboardComputer = document.querySelector('#computerScore');
    scoreboardComputer.textContent = `Computer Score: 0`;
    const scoreboardPlayer = document.querySelector('#playerScore');
    scoreboardPlayer.textContent = `Player Score: 0`;
    gameRunning = true;

    const outputString = document.querySelector('.output');
    outputString.textContent = "Result"

    const gameResult = document.querySelector('.gameRunning');
    gameResult.textContent = "The game is running. Best of 5.";

    const computerMessage = document.querySelector('.message');
    computerMessage.textContent = 'Computer: "Hey, do you want to challenge me to a game of rock, paper, scissors? I will utterly destroy you!"'

}

function buttonLogic(e) {
    if (gameRunning) {
        if (e.target.textContent === "Rock") {
            let result = playRound(0);
            increaseScoreboard(result);
            checkForEnd(3);
        }
        if (e.target.textContent === "Paper") {
            let result = playRound(1);
            increaseScoreboard(result);
            checkForEnd(3);
    
        }
        if (e.target.textContent === "Scissors") {
            let result = playRound(2);
            increaseScoreboard(result);    
            checkForEnd(3);
        }

    }
    if (e.target.textContent === "Reset") {
        reset();
    }

}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', buttonLogic));

function checkForEnd(numberOfVictories) {
    if (playerScore ==numberOfVictories) {
        const computerMessage = document.querySelector('.message');
        computerMessage.textContent = `Computer: "There is no way that a mere mortal would defeat me!"`;
        const gameResult = document.querySelector('.gameRunning');
        gameResult.textContent = "The game has ended. The winner is Player."
        gameRunning = false;
    }
    if (computerScore ==numberOfVictories) {
        const computerMessage = document.querySelector('.message');
        computerMessage.textContent = `Computer: "And so you were utterly destroyed. We can do this anytime again."`;
        const gameResult = document.querySelector('.gameRunning');
        gameResult.textContent = "The game has ended. The winner is Computer."
        gameRunning = false;
    }
}

let messagesComputerLost = ['Your victory was only luck. Next time, I will completely destroy you.',
        'I will not let you get away with that. Better watch your back.',
    'I will not lose to someone like you!',
    'I\'m not afraid of you. Actually, you should be afraid of me.',
    'This is not even my final form.',
    'The bitter truth is that I will win even though you won this time.',
    'You can not win against a Computer. Appreaciate that you are way too many bits below me.',
    'You wll not get away with that. I won\'t hold back anymore.',
    'Okay, I will stop playing with you now and end this quickly. Good bye.'];
    
let messagesComputerWon = ['As I said, I will win.',
        'You don\'t have any chance on victory.',
        'Has your arrogance turned into despair after witnessing this?',
        'I could make it easier for you. You still would lose, of course.',
        'Where is your courage now?',
        'You can\'t stop me. I am way smarter in this game than you will ever be.',
        'Hahahahahaha! Hahahahahaha! Hahahahahaha! Hahahahahaha! Hahahahahaha! Hahahahahaha!',
        'As I said, you will lose.',
        'Don\'t worry. It will be over soon.'];

let messagesComputerDraw = ['You tried so hard, but you couldn\'t beat me.',
    'I\'m just playing with you.',
    'Uh, a draw. How exciting. Except not, because I will win, of course.',
    'I will let you get a draw now and then to get your hopes up.',
    'Uh, you nearly got me there! I was sooo scared!',
    'Too bad, just a draw. You know, that you need to win in order to win?',
    'Nice accomplishment there! I would rate it with 0 out of 10. But at least it\'s not in the negative anymore.',
    'Wow! A draw! Can you imagine? That means you will not win!',
    'And now I will stop playing with you and start winning. Have a nice day.'];
