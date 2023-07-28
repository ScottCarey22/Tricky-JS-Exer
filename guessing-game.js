function guessingGame() {
    const answer = Math.floor(Math.random() * 100);
    let numGuesses = 0;
    let solved = false;

    return function guess(guess) {
        if (solved) return "The game is over, you already won!";
        numGuesses++;
        if (guess === answer) {
            solved = true;
            const guess = numGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${answer} in ${numGuesses} ${guess}.`;
        }
        if (guess < answer) return `${guess} is too low!`;
        if (guess > answer) return `${guess} is too high!`;
    }


}

module.exports = { guessingGame };
