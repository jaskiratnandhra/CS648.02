function getUserChoice() {
    const userChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice;
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return getUserChoice();
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    
    alert(`You chose ${userChoice}. The computer chose ${computerChoice}.`);

    const result = determineWinner(userChoice, computerChoice);
    alert(result);
}

playGame();