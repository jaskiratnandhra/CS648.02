const coinFlip = Math.round(Math.random());
const userChoice = window.prompt("Heads or tails").toLowerCase();

const flipResult = coinFlip ? "heads" : "tails";

if (userChoice === flipResult) {
    window.document.write(`The flip was ${flipResult} and you chose ${userChoice} so you win!`);
} else {
    window.document.write(`The flip was ${flipResult} and you chose ${userChoice} so you lose!`);
}
