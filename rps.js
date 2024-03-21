//get the computer's choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randomNum === 0) {
        computerChoice = "Rock";
    } else if (randomNum === 1) {
        computerChoice = "Scissors";
    } else if (randomNum === 2) {
        computerChoice = "Paper";
    }
    computerChoice = computerChoice.toLowerCase();
    return computerChoice; // Return 
}

//get the player's choice
function getPlayerChoice() {
    let playerChoice = prompt("What shall thou play: Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    console.log(playerChoice);  //console log player choice
    return playerChoice;
}

//var
const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();
let playerpoints=0;
let computerpoints=0;
let drawpoints=0;

//decide a winner
function winner(computerChoice, playerChoice) {
    let result;
    //compare hands
    if (computerChoice === playerChoice) {
        result = "It's a draw!";
    }
    if (computerChoice === "rock" && playerChoice === "scissors") {
        result = "Computer wins!";
    }
    if (computerChoice === "rock" && playerChoice === "paper") {
        result = "Player wins!";
    }
    if (computerChoice === "paper" && playerChoice === "rock") {
        result = "Computer wins!";
    }
    if (computerChoice === "paper" && playerChoice === "scissors") {
        result = "Player wins!";
    }
    if (computerChoice === "scissors" && playerChoice === "rock") {
        result = "Player wins!";
    }
    if (computerChoice === "scissors" && playerChoice === "paper") {
        result = "Computer wins!";
    }
    //add scores
    if (result === "Player wins!")
    playerpoints = playerpoints+1
    else if (result === "Computer wins!")
    computerpoints = computerpoints+1
    else if (result === "It's a draw!")
    drawpoints = drawpoints+1
    console.log(result); // log result
    return result; 
}

//show the computer choice in the console 
console.log(computerChoice);

//call the winner function to act
 alert(winner(computerChoice, playerChoice));

    
// run the game for 4 additional rounds
for (let i = 0; i < 4; i++) {
    //get the computer's choice
    const computerChoice = getComputerChoice();

    //get the player's choice
    const playerChoice = getPlayerChoice();

    //decide a winner
    const result = winner(computerChoice, playerChoice);

    //show the result
    console.log(playerpoints +" " + computerpoints +" "+ drawpoints);
    alert(result);
    alert("You got: " + playerpoints + " Comp got: " + computerpoints + "Draws: " + drawpoints)
}

