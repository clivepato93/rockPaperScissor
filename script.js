const options = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

const selections = {
    "RockScissors":1,"PaperRock":1,"ScissorsPaper":1,
}


function getHumanChoice(btn) {
    return btn
}

function playRound(humanChoice,computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`This is a draw! ${humanChoice} is the same ${computerChoice}`);
        return;
    } else if (selections[humanChoice + computerChoice]) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        document.querySelector('#humanscore').innerText = humanScore
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        document.querySelector("#computerscore").innerText = computerScore;

    }
    
}

function declareWinner() {
    if (humanScore == 5) {
        const div = document.createElement('div')
        div.innerText = "Winner"
        document.body.appendChild(div)
        rock.removeEventListener('click',btnFunction)
    }
    else if (computerScore == 5) {
        alert("you lose")
                const div = document.createElement("div");
                div.innerText = "Loser";
                document.body.appendChild(div);
                rock.removeEventListener("click", btnFunction);
    }
    
}

function btnFunction(e) {
 
    e.preventDefault();
    playRound(getHumanChoice(this.innerText), getComputerChoice());
    declareWinner();
}

rock.addEventListener("click", btnFunction);

document.querySelector("#paper").addEventListener("click", function (e) {
  e.preventDefault();

  playRound(getHumanChoice(this.innerText), getComputerChoice());
});

document.querySelector("#scissors").addEventListener("click", function (e) {
  e.preventDefault();

  playRound(getHumanChoice(this.innerText), getComputerChoice());
});




// while (humanScore < 5 || computerScore < 5) {
//     if (humanScore == 5) {
//         alert("you have won ")
//         break
//     }
//     else if(computerScore==5) {
//         alert("lose ");
//         break
//     }
//     playGame()

// }
    // playRound(userSelection,computer);
// while (rounds < 5) {
    
//     playRound(getHumanChoice(), getComputerChoice());
//     rounds++;
// }
