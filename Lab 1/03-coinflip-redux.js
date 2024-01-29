for (let i = 1; i <= 10; i++) {
    const coinFlip = Math.round(Math.random());
    if (coinFlip) {
        console.log("It is Heads");
    } else {
        console.log("It is Tails");
    }
}
