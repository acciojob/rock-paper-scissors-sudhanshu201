//your code here
let turns, userPoints, computerPoints, roundsLeft;

function startGame() {
    turns = parseInt(document.getElementById('game-number').value);
    userPoints = 0;
    computerPoints = 0;
    roundsLeft = turns;

    updateDOM('rounds-left', roundsLeft);
    updateDOM('user-points', userPoints);
    updateDOM('computer-points', computerPoints);
    updateDOM('game-result', '');

    playRound();
}

function playRound() {
    if (roundsLeft > 0) {
        const computerChoice = getComputerChoice();
        updateDOM('computer-choose', computerChoice);

        // Assume userChoice is obtained from the UI
        // Compare userChoice and computerChoice to determine the round result
        const userChoice = getUserChoice(); // Replace with actual logic

        const roundResult = determineRoundResult(userChoice, computerChoice);
        updateDOM('round-result', roundResult);

        // Update userPoints, computerPoints based on roundResult
        if (roundResult === 'WON') {
            userPoints++;
        } else if (roundResult === 'LOSE') {
            computerPoints++;
        }

        // Update roundsLeft and update the UI
        roundsLeft--;
        updateDOM('rounds-left', roundsLeft);

        setTimeout(playRound, 1000); // Delay for visualization, replace with actual logic
    } else {
        // Game finished, determine the final result
        const gameResult = determineGameResult();
        updateDOM('game-result', gameResult);
    }
}

function updateDOM(elementId, value) {
    document.getElementById(elementId).innerText = value;
}

function getComputerChoice() {
    return ['ROCK', 'PAPER', 'SCISSORS'][Math.floor(Math.random() * 3)];
}

function getUserChoice() {
    // Replace with logic to get user's choice from UI
    return 'ROCK';
}

function determineRoundResult(userChoice, computerChoice) {
    // Replace with logic to determine round result based on userChoice and computerChoice
    // Return 'WON', 'TIE', or 'LOSE'
    return 'TIE';
}

function determineGameResult() {
    // Replace with logic to determine the game result based on userPoints and computerPoints
    // Return 'WON', 'TIE', or 'LOSE'
    return 'TIE';
}
