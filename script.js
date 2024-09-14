const options = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
let rounds = 0;
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

const selections = {
    "RockScissors":1,"PaperRock":1,"ScissorsPaper":1,
}


function getHumanChoice() {
    let input = prompt('Select from Rock,Paper,Scissors');

    input = input[0].toUpperCase()+input.slice(1).toLowerCase()
    while (options.indexOf(input) == -1) {
        input = prompt("Select from Rock,Paper,Scissors"); 
        input = input[0].toUpperCase() + input.slice(1).toLowerCase();
    }
    return input
}
// const userSelection = getHumanChoice();
// const computer = getComputerChoice();

function playRound(humanChoice,computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`This is a draw! ${humanChoice} is the same ${computerChoice}`);
    } else if (selections[humanChoice + computerChoice]) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++
    }
    
}


    // playRound(userSelection,computer);
while (rounds < 5) {
    
    playRound(getHumanChoice(), getComputerChoice());
    rounds++;
}
