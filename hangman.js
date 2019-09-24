function wrongGuessCount(word, guesses) {
    return guesses
        .filter(letter => word.indexOf(letter) < 0).length

}

console.log('wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']), 'should be:', 2)

function showGuess(word, guesses) {
    return word.split('').map(letter => guesses.indexOf(letter) < 0 ? '_' : letter).join(' ')
}

console.log('show guess 1:', showGuess('hello', ['l']), 'should be:', '_ _ l l _')
console.log('show guess 2:', showGuess('hello', ['l', 'a', 'e']), 'should be:', '_ e l l _')

function isWinner(word, guesses) {
    return word.split(' ').filter(letter => guesses.indexOf(letter) >= 0).length === word.length
}

console.log('winner 1:', isWinner('hello', ['e', 'x']), 'should be:', false)
console.log('winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']), 'should be:', true)



// These lines are needed to be able to read user input from the console
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

function next(word, guesses) {
    let numWrongGuesses = wrongGuessCount(word, guesses);
    console.log(`[${showGuess(word, guesses)}] wrong guesses: ${numWrongGuesses}`);

    if (numWrongGuesses === 6) {
        console.log("You've lost!");
    } else if (isWinner(word, guesses)) {
        console.log("You've won!");
    } else {
        rl.question('next letter? ', answer => {
            const letter = answer.trim()[0];
            console.log('guessing letter:', letter);
            // (actually, you'd need to validate this as well)
            next(word, guesses.concat([letter]));
        });
    }
}

next('hello', ['hello'])