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
    if (playerSelection == "rock" && computerSelection == "rock" || 
    playerSelection == "paper" && computerSelection == "paper" || 
    playerSelection == "scissors" && computerSelection == "scissors") {
        playerScore += 1;
        computerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection =="rock" && computerSelection == "scissors" || 
    playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock" ||
    playerSelection == "rock" && computerSelection == "paper" || 
    playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
    } else {
        i -= 1;
    }
};

const h1 = document.querySelector("h1");
const btns = document.querySelectorAll('button');
const container = document.querySelector('.results');
const main = document.querySelector('.container');
const results = document.createElement("p");
const playAgain = document.createElement('button');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const h3 = document.createElement("h3");
playAgain.innerHTML = 'Play Again?';
playAgain.style.cssText = 'background-color: #1e90ff; color: white; border-radius: 60px; padding: 10px; height: 150px; width: 250px; font-size: 40px;' 
results.textContent = 'Player Score: 0 Computer Score: 0';

btns.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
        results.textContent = 'Player Score: ' + playerScore + ' Computer Score: ' + computerScore + ''; 
        container.appendChild(results);
        if (playerScore == 5 && playerScore > computerScore) {
            h3.innerHTML = 'Player Wins!';
            switchToButton();
        } else if (computerScore == 5 && computerScore > playerScore) {
            h3.innerHTML = 'Computer Wins!';
            switchToButton();
        } else if (playerScore == 5 && computerScore == 5) {
            h3.innerHTML = `It's a tie!`;
            switchToButton();
        }
    });
});


playAgain.addEventListener('click', () => {
    results.textContent = 'Player Score: 0 Computer Score: 0';
    main.removeChild(playAgain);
    main.appendChild(rock);
    main.appendChild(paper);
    main.appendChild(scissors);
    main.removeChild(h3);
    main.style['flex-direction'] = "row";
});

function switchToButton() {
    main.style['flex-direction'] = "column";
    main.appendChild(h3);
    main.appendChild(playAgain);
    playerScore = 0;
    computerScore = 0;
    rock.remove();
    paper.remove();
    scissors.remove();
};
