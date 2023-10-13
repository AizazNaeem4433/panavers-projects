import inquirer from "inquirer";

console.log('Game: Lets play a game of guessing a number between 1 to 10 in 3 tries');
//let rannum = Math.random()//this functionwill through a random floating number butwe need 1 to 10 for this
const rannum = Math.floor(Math.random() * 10 + 1);

//console.log("Your random number is " + rannum);

let actualnumber: number = rannum;
let numTries = 3;

async function startGame() {
    while (numTries > 0) {
        const answers = await inquirer.prompt([
            {
                name: "mineGuess",
                message: "Enter your number",
                type: "number",
            },
        ]);

        if (answers.mineGuess === actualnumber) {
            console.log("Wow! You guessed it right. Game ends.");
            break; // Exit the loop when the player guesses correctly
        } else {
            console.log("You guessed it wrong.");
        }
        if (answers.mineGuess>actualnumber){
            console.log("Think lower");
            
        }
        else{
            console.log("Think higher");
            
        }
        console.log(`You have ${numTries - 1} tries left.`);


        numTries--;
    }

    const playAgainAnswer = await inquirer.prompt([
        {
            name: "playAgain",
            message: "Do you want to play again?",
            type: "confirm",
        },
    ]);

    if (playAgainAnswer.playAgain) {
        numTries = 3; // Reset the number of tries
        actualnumber = Math.floor(Math.random() * 10 + 1); // Generate a new random number
       // console.log("Your random number is " + actualnumber);
        startGame(); // Start the game again by calling the function recursively
    } else {
        console.log("Thanks for playing!");
    }
}

startGame(); // Start the game initially
