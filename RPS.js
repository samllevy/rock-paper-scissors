let computerScore = 0 ;
let userScore = 0 ;

let userChoice;
let computerChoice;

//update score
function updateScore(computerScore, userScore){
    const computerWins = document.querySelector("#compScore");
    computerWins.textContent = "Computer score : " + computerScore;
    const userWins = document.querySelector("#userScore");
    userWins.textContent = "User score : " + userScore;
};
updateScore(computerScore, userScore);

// comments on the round
const comments = document.querySelector("#comments"); 
let commentContent = "No comment yet"; 

function updateComments(){
    comments.textContent = commentContent;}
updateComments();

// user choice function 
function getUserChoice () {
    const rockButton = document.querySelector("#rock-button");
        rockButton.addEventListener("click", function(e) {
        userChoice = "rock";
        console.log("The user choice is : " + userChoice);
    });

    const paperButton =  document.querySelector("#paper-button");
        paperButton.addEventListener("click", function(f) {
        userChoice = "paper";
        console.log("The user choice is : " + userChoice);
    });

    const scissorsButton = document.querySelector("#scissors-button");
        scissorsButton.addEventListener("click", function(g) {
        userChoice = "scissors";
        console.log("The user choice is : " + userChoice);
    });
    return userChoice;
};
getUserChoice();

// computer choice function
function getComputerChoice () {
    let randomNum;
    const randomBtn = document.querySelector("#random-button");
    randomBtn.addEventListener("click", function(getRandomNum)) {
        let randomNum = Math.floor(Math.random() * 3 + 1) ; 
        let computerChoice;}
    
    if (randomNum === 1) {
        console.log("The computer choice is rock");
        computerChoice = "rock";
        return computerChoice;
        } else if (randomNum === 2) {
            console.log("The computer choice is paper");
            computerChoice = "paper";
            return computerChoice;
        } else {
            console.log("The computer choice is scissors");
            computerChoice = "scissors";
            return computerChoice ;
        };
       
    }

getComputerChoice();


//plays a round and increases the winner's score

function singleRound (userScore, computerScore) {
    getComputerChoice();
    getUserChoice();

    let userChoice = getUserChoice ();
    let computerChoice = getComputerChoice (); 

   if (userChoice === computerChoice) {
            //comments.textContent = "It's a tie!";}
        else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            userScore++;
            //comments.textContent = `You win! ${userChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            //comments.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
        }
        updateScore(userScore, computerScore);
        updateComments(commentContent);
    }       
}
singleRound(userScore, computerScore);
*/

/*plays a game

function playGame() {
    for(singleRound , singleRound < 5 , singleRound++) {
        
    }
}
playGame();


*/
