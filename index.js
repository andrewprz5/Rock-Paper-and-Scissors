let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        alert("Player chooses Rock. Computer chooses Rock. It's a tie!");
        playerScore += 1;
        computerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("Player chooses Paper. Computer chooses Rock. Paper covers Rock. Player wins!");
        playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert("Player chooses Scissors. Computer chooses Rock. Rock crushes Scissors. Computer wins!");
        computerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("Player chooses Rock. Computer chooses Paper. Paper covers Rock. Computer wins!");
        computerScore += 1;
    } else if (playerSelection =="rock" && computerSelection == "scissors") {
        alert("Player chooses Rock. Computer chooses Scissors. Rock crushes Scissors. Player wins!");
        playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        alert("Player chooses Paper. Computer chooses Paper. It's a tie!");
        playerScore += 1;
        computerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert("Player chooses Scissors. Computer chooses Paper. Scissors cuts Paper. Player wins!");
        playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert("Player chooses Paper. Computer chooses Scissors. Scissors cuts Paper. Computer wins!");
        computerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        alert("Player chooses Scissors. Computer chooses Scissors. It's a tie!");
        playerScore += 1;
        computerScore += 1;
    } else {
        alert("That is not an option, buddy.");
        i -= 1;
    }
};

function game() {
    if (confirm("Welcome to Rock, Paper, & Scissors! Dare to challenge the computer for 5 rounds?")) {
        for (i = 0; i < 5; i++) {
            let playerInput = prompt("Pick your choice: Rock, Paper, or Scissors?");
            let computerChoice = getComputerChoice();
            if (playerInput) {
                let playerChoice = playerInput.toLowerCase();
                playRound(playerChoice, computerChoice);
                alert("Player: " + playerScore + " Computer: " + computerScore);
                if (i == 4 && (playerScore > computerScore)) {
                    alert("You won!");
                } else if (i == 4 && (playerScore < computerScore)) {
                    alert("Computer won!");
                } else if (i == 4 && (playerScore == computerScore)) {
                    alert("No winner determined!");
                } else {
                }
            } else {
                alert("Quitter..."); 
                break;       
            }
        }
    } else {
        alert("So you're a chicken then, huh?");

    }
};

function playAgain() {
    for (i = 0; i < Infinity; i++) {
        if (confirm("Do you wish to play again?")) {
            playerScore = 0;
            computerScore = 0;
            game();
        } else {
            alert("Ok, see ya later!");
            break;
        }
    }
};

function playOrNot () {
    if (game()) {
        playAgain();
    } else {
        return null;
    }
};

playOrNot();



// shorten entire code if you can